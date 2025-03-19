import type { Action } from 'svelte/action';

function* stagger() {
	let index = 0;
	while (true) {
		yield index++;
	}
}

export const animate: Action = (node) => {
	node.classList.add('animate');
	node.style.setProperty('--stagger', String(stagger().next().value));
};
