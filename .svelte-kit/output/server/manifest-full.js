export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["IMG_7269.jpeg","IMG_7270.jpeg","IMG_7271.jpeg","IMG_7272.jpeg","IMG_7277.jpeg","IMG_7278.jpeg","IMG_7281.jpeg","IMG_7284.jpeg","IMG_7285.jpeg","IMG_7287.jpeg","IMG_7292.jpeg","IMG_7293.jpeg","IMG_7297.jpeg","IMG_7299.jpeg","IMG_7300.jpeg","IMG_7301.jpeg","IMG_7302.jpeg","IMG_8530.jpeg","IMG_8531.jpeg","IMG_8532.jpeg","favicon.png"]),
	mimeTypes: {".jpeg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.0e142a6a.js","app":"_app/immutable/entry/app.980a3a0b.js","imports":["_app/immutable/entry/start.0e142a6a.js","_app/immutable/chunks/scheduler.2b238406.js","_app/immutable/chunks/singletons.0f0cf94a.js","_app/immutable/chunks/index.84afc186.js","_app/immutable/entry/app.980a3a0b.js","_app/immutable/chunks/scheduler.2b238406.js","_app/immutable/chunks/index.d987417c.js"],"stylesheets":[],"fonts":[]},
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
