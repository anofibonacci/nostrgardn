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
		client: {"start":"_app/immutable/entry/start.20756d06.js","app":"_app/immutable/entry/app.645d0af9.js","imports":["_app/immutable/entry/start.20756d06.js","_app/immutable/chunks/scheduler.35d2bb6c.js","_app/immutable/chunks/singletons.fd1e7e2a.js","_app/immutable/chunks/index.3b5b6fbf.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.645d0af9.js","_app/immutable/chunks/scheduler.35d2bb6c.js","_app/immutable/chunks/index.0b6bcf33.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
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
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/api/posts",
				pattern: /^\/api\/posts\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posts/_server.ts.js'))
			},
			{
				id: "/rss.xml",
				pattern: /^\/rss\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/rss.xml/_server.ts.js'))
			},
			{
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
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
