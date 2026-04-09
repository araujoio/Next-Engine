#!/usr/bin/env node

import { Logger } from '../utils/logger.ts';

const log = new Logger();

log.info(`Commands:`);

log.info(`npx create-page <route>   Creates a new page in the Next.js app directory.`);
log.info(`Options:`);
log.warn(`  -p                      Creates the page inside the (private) group.`);
log.info(`Examples:`);
log.warn(`  npx create-page about`);
log.warn(`  npx create-page dashboard -p\n`);

log.info(`npx delete-page <route>   Deletes an existing page and cleans up empty parent directories.`);
log.info(`Options:`);
log.warn(`  -p                      Deletes the page from the (private) group.`);
log.info(`Examples:`);
log.warn(`  npx delete-page about`);
log.warn(`  npx delete-page dashboard -p\n`);

log.dim(`Next Engine v1.0.0`);