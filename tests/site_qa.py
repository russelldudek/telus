from pathlib import Path
import re, json, subprocess, sys
ROOT=Path(__file__).resolve().parents[1]
required=['index.html','resume.html','cover-letter.html','interview-brief.html','120-day-plan.html','portfolio-investment-memo.html','styles.css','brand-tokens.css','app.js','brand-intelligence.md','assets/brand/telus-digital-logo.svg']
for p in required:
    f=ROOT/p
    assert f.exists() and f.stat().st_size>0, f'Missing or empty: {p}'
all_text='\n'.join(p.read_text(errors='ignore') for p in ROOT.rglob('*') if p.is_file() and p.suffix.lower() in {'.html','.css','.js','.md','.json','.svg','.yml','.yaml','.txt'})
forbidden=[r'role\s*[-_ ]?forge']
for pat in forbidden:
    assert not re.search(pat,all_text,re.I), f'Forbidden internal label found: {pat}'
resume=(ROOT/'resume.html').read_text(); cover=(ROOT/'cover-letter.html').read_text()
assert 'cover-letter.html' in resume and 'View Cover Letter' in resume
assert 'resume.html' in cover and 'View Resume' in cover
for value in ['412.287.8640','russelldudek@gmail.com','linkedin.com/in/russelldudek','Pittsburgh, Pennsylvania']:
    assert value in resume and value in cover, value
assert resume.count('class="paper resume-page')==2
assert cover.count('class="paper letter-page')==1
assert 'prefers-reduced-motion' in (ROOT/'styles.css').read_text()
assert 'aria-selected' in (ROOT/'index.html').read_text()
print('source QA passed')
