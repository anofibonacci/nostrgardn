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
		client: {"start":"_app/immutable/entry/start.fb646515.js","app":"_app/immutable/entry/app.de119f31.js","imports":["_app/immutable/entry/start.fb646515.js","_app/immutable/chunks/scheduler.5b5d9a22.js","_app/immutable/chunks/singletons.299ee9b8.js","_app/immutable/chunks/index.821ad274.js","_app/immutable/entry/app.de119f31.js","_app/immutable/chunks/scheduler.5b5d9a22.js","_app/immutable/chunks/index.5bbdcbc7.js"],"stylesheets":[],"fonts":[]},
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
