#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { validateRoute } from '../validator/validate-route.ts'
import { Logger } from '../utils/logger.ts'
import { deletePage } from '../service/page-service.ts'

const log: Logger = new Logger();
const args: string[] = process.argv.slice(2);
const isPrivate: boolean = args.includes('-p');
const route: string = args.find(a => !a.startsWith('-'))!;
const group: string = isPrivate ? '(private)' : '(public)';

try {
  validateRoute(route);

  const pageName: string = route.replace(/^\/|\/$/g, '').toLowerCase();
  const folderPath: string = path.join(process.cwd(), 'src', 'app', group, pageName);

  if (!fs.existsSync(folderPath)) {
    log.error(`Page not found at app/${group}/${pageName}/`);
    log.dim(`Are you sure it exists? Try -p if it's a private route.`);
    process.exit(1);
  }

  deletePage(folderPath);

  log.success(`Successfully deleted page at: /${pageName}`);
  process.exit(0);

} catch (err) {
  if (err instanceof Error) {
    log.error(err.message);
  } else {
    log.error('Unknown error:');
    console.error(err);
  }
  process.exit(1);
}
