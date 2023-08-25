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
<<<<<<< HEAD
		client: {"start":"_app/immutable/entry/start.13bff6e4.js","app":"_app/immutable/entry/app.63d14525.js","imports":["_app/immutable/entry/start.13bff6e4.js","_app/immutable/chunks/scheduler.2b238406.js","_app/immutable/chunks/singletons.80028530.js","_app/immutable/chunks/index.84afc186.js","_app/immutable/entry/app.63d14525.js","_app/immutable/chunks/scheduler.2b238406.js","_app/immutable/chunks/index.d987417c.js"],"stylesheets":[],"fonts":[]},
=======
		client: {"start":"_app/immutable/entry/start.0e142a6a.js","app":"_app/immutable/entry/app.980a3a0b.js","imports":["_app/immutable/entry/start.0e142a6a.js","_app/immutable/chunks/scheduler.2b238406.js","_app/immutable/chunks/singletons.0f0cf94a.js","_app/immutable/chunks/index.84afc186.js","_app/immutable/entry/app.980a3a0b.js","_app/immutable/chunks/scheduler.2b238406.js","_app/immutable/chunks/index.d987417c.js"],"stylesheets":[],"fonts":[]},
>>>>>>> 9a76477e57f6597a1e898750e0d74f48a87a200c
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
