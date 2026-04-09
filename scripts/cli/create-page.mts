#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { Logger } from '../utils/logger.ts';
import { validateRoute } from '../validator/validate-route.ts';
import { createPage, ensureGroupBasics } from '../service/page-service.ts';
import { toPascalCase } from '../utils/normalize.ts';

const log: Logger = new Logger();
const args: string[] = process.argv.slice(2);
const isPrivate: boolean = args.includes('-p');
const route: string = args.find(a => !a.startsWith('-'))!;
const group: string = isPrivate ? '(private)' : '(public)';

try {
  validateRoute(route);

  const pageName: string = route.replace(/^\/|\/$/g, '').toLowerCase();
  const pagePath: string = path.join(process.cwd(), 'src', 'app', group, pageName, 'page.tsx');

  ensureGroupBasics(
    path.join(process.cwd(), 'src', 'app', group, 'page.tsx'),
    path.join(process.cwd(), 'src', 'app', group, 'layout.tsx'), isPrivate);

  if (!fs.existsSync(pagePath)) {
    createPage(pagePath, toPascalCase(pageName));

    log.info('Successfully created page at:');
    log.success(`/${pagePath}`);
    process.exit(0);
  }

  log.warn(`Page already exists for route "/${pageName}"`);
  log.dim(`/${pagePath}`);
  process.exit(1);

} catch (err) {
  if (err instanceof Error) {
    log.error(err.message);
  } else {
    log.error('Unknown error:');
    console.error(err);
  }
  process.exit(1);
}

