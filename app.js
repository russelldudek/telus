const scenarios = {
  managed: {
    mix: [34,18,8,4],
    outcome: 'Protect service while increasing value density',
    authority: 'Human approval for exceptions and commitments',
    economics: 'Fund a bounded account transformation',
    delivery: 'Integrate before replacing the client stack',
    decision: 'INVEST - bounded transformation'
  },
  volume: {
    mix: [18,22,16,8],
    outcome: 'Reduce avoidable effort without hiding failure demand',
    authority: 'Human exception control and escalation ownership',
    economics: 'Sequence assistive and conversational value first',
    delivery: 'Instrument quality before expanding autonomy',
    decision: 'SEQUENCE - evidence before autonomy'
  },
  regulated: {
    mix: [42,17,4,1],
    outcome: 'Preserve trust, accuracy and accountable judgment',
    authority: 'Human decision rights remain explicit and auditable',
    economics: 'Prioritize risk-adjusted service improvement',
    delivery: 'Use AI to prepare, assist and verify - not silently decide',
    decision: 'PARTNER - govern the authority boundary'
  },
  growth: {
    mix: [10,18,20,16],
    outcome: 'Turn service interactions into responsible growth moments',
    authority: 'Human intervention for high-value or ambiguous moments',
    economics: 'Scale only where conversion and experience move together',
    delivery: 'Combine conversation, insight and workflow execution',
    decision: 'INVEST - scale with guardrails'
  }
};
const lensCopy = {
  workshare: 'Segment interactions by complexity, risk and value. Assign human authority before selecting the AI mode.',
  delivery: 'Compose CCaaS, CRM, data, AI and operating change into one accountable delivery path.',
  economics: 'Connect client outcomes, adoption, service quality, delivery cost and reuse to a portfolio decision.'
};
const grid = document.querySelector('.interaction-grid');
if(grid){
  for(let i=0;i<64;i++){
    const cell=document.createElement('span'); cell.className='cell'; cell.style.setProperty('--i',i); cell.setAttribute('aria-hidden','true'); grid.appendChild(cell);
  }
  const updateScenario=(key)=>{
    const data=scenarios[key]; const cells=[...grid.children];
    const types=[]; ['human','assist','conversation','agentic'].forEach((t,idx)=>{for(let i=0;i<data.mix[idx];i++)types.push(t)});
    cells.forEach((cell,i)=>{cell.className='cell'; requestAnimationFrame(()=>{cell.classList.add(types[i]||'human','ready')})});
    document.querySelector('#readout-outcome strong').textContent=data.outcome;
    document.querySelector('#readout-authority strong').textContent=data.authority;
    document.querySelector('#readout-economics strong').textContent=data.economics;
    document.querySelector('#readout-delivery strong').textContent=data.delivery;
    document.querySelector('#decision-text').textContent=data.decision;
    document.querySelectorAll('.scenario-tabs button').forEach(btn=>btn.setAttribute('aria-selected',String(btn.dataset.scenario===key)));
  };
  document.querySelectorAll('.scenario-tabs button').forEach((btn,idx)=>{
    btn.addEventListener('click',()=>updateScenario(btn.dataset.scenario));
    btn.addEventListener('keydown',e=>{
      const buttons=[...document.querySelectorAll('.scenario-tabs button')]; let next=idx;
      if(e.key==='ArrowRight') next=(idx+1)%buttons.length;
      if(e.key==='ArrowLeft') next=(idx-1+buttons.length)%buttons.length;
      if(e.key==='Home') next=0; if(e.key==='End') next=buttons.length-1;
      if(next!==idx){e.preventDefault();buttons[next].focus();buttons[next].click()}
    });
  });
  document.querySelectorAll('.lens-tabs button').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('.lens-tabs button').forEach(b=>b.classList.toggle('active',b===btn));
    document.querySelector('.lens-copy').textContent=lensCopy[btn.dataset.lens];
  }));
  setTimeout(()=>updateScenario('managed'),120);
}
const menu=document.querySelector('.menu-button'); if(menu){menu.addEventListener('click',()=>{const h=document.querySelector('.site-header');h.classList.toggle('open');menu.setAttribute('aria-expanded',String(h.classList.contains('open')));});}
