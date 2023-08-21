export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["IMG_8530.jpeg","IMG_8531.jpeg","IMG_8532.jpeg","favicon.png"]),
	mimeTypes: {".jpeg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.f7068a18.js","app":"_app/immutable/entry/app.479eb378.js","imports":["_app/immutable/entry/start.f7068a18.js","_app/immutable/chunks/scheduler.2bcde0a4.js","_app/immutable/chunks/singletons.4cb47995.js","_app/immutable/chunks/index.1f5880ea.js","_app/immutable/entry/app.479eb378.js","_app/immutable/chunks/scheduler.2bcde0a4.js","_app/immutable/chunks/index.4caa21f6.js"],"stylesheets":[],"fonts":[]},
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
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
