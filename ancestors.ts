const parentChild: [string, string][] = [
	["pam", "bob"],
	["tom", "bob"],
	["tom", "liz"],
	["bob", "ann"],
	["bob", "pat"],
	["pat", "jim"]
]

const getAncestors = (parentChild: [string, string][], child: string): string[] => {
	const ancestors: Set<string> = new Set<string>()
	let targets = [child]
	while (true) {
		let new_ancestors: string[] = []
		for (const target of targets) {
			const parents = parentChild
				.filter(([p, c]) => c === target && !ancestors.has(p))
				.map(([p, c]) => p)
			new_ancestors = [...new_ancestors, ...parents]
		}
		if (new_ancestors.length === 0) break
		targets = new_ancestors
		new_ancestors.forEach(a => ancestors.add(a))
	}
	return [...ancestors]
}

for (const child of ["jim", "pat", "bob", "liz"]) {
	console.log(`${child}'s ancestors:`)
	console.log(getAncestors(parentChild, child))
}
