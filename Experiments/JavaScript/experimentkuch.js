const form = document.getElementById('Form');
const title = document.getElementById('title');
const pr = document.querySelector('select[name="dropdown"]');
const feed = document.getElementById('Feed');


form.addEventListener('submit', event=>{
    event.preventDefault();
	const t = title.value;
    
	if(!t) return;
    
	const task = { 
        title: t, priority: pr.value
    };
	runTask(task);
	title.value = '';
	title.focus();
});

function runTask(t){
    const d = document.createElement('div');
    
    d.innerHTML = `<strong>${t.title}</strong> <small>(${t.priority})</small>`;
    const btn = document.createElement('button');
    btn.textContent = 'Remove';

    btn.addEventListener('click', ()=>{ 
        d.remove();  
    });

    d.appendChild(btn);
    feed.appendChild(d);
}
