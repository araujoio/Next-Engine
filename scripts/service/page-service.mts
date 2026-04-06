import fs from 'fs';
import { pageTemplate, privateLayoutTemplate, publicLayoutTemplate } from '../templates/templates.mts';
import path from 'path';

/**
 * Create a page in src/app/(group)/<route>/page.tsx
*/
export function createPage(filePath: string, pageName: string) : void {
  const pageContent: string = pageTemplate(pageName);

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, pageContent, 'utf8');
}

/**
  Remove a page in src/app/(group)/<route>/page.tsx and its empty parents up to stopAt
*/
export function deletePage(filePath: string): void {
  if (!fs.existsSync(filePath)) return;

  fs.rmSync(filePath, { recursive: true, force: true });

  let current = path.dirname(filePath);
  while (current !== path.join(process.cwd(), 'src', 'app', '(public)') && fs.existsSync(current) || 
  current !== path.join(process.cwd(), 'src', 'app', '(private)') && fs.existsSync(current)) {
    if (fs.readdirSync(current).length > 0) return;

    fs.rmdirSync(current);
    current = path.dirname(current);
  }
}

/**
 * Ensure the files for a page parent and layout parent exist
*/
export function ensureGroupBasics(pageParent: string, layoutParent: string, isPrivate: boolean) : void {
  if (!fs.existsSync(pageParent)) {
    const pageName : string = isPrivate ? 'Dashboard' : 'Home';
    
    fs.mkdirSync(path.dirname(pageParent), { recursive: true });
    fs.writeFileSync(pageParent, pageTemplate(pageName), 'utf8');
  }

  if (!fs.existsSync(layoutParent)) {
    const layoutContent : string = isPrivate ? privateLayoutTemplate() : publicLayoutTemplate();
    
    fs.mkdirSync(path.dirname(layoutParent), { recursive: true });
    fs.writeFileSync(layoutParent, layoutContent, 'utf8');
  }
}

