export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "sveltekit-gh-pages/_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CiONhIvS.js","app":"_app/immutable/entry/app.C46U5on5.js","imports":["_app/immutable/entry/start.CiONhIvS.js","_app/immutable/chunks/entry.C-pxSeZp.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/entry/app.C46U5on5.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.7I0j2CQ_.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/attending",
				pattern: /^\/attending\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
