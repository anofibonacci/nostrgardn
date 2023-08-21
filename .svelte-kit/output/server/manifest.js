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
		client: {"start":"_app/immutable/entry/start.be4397bc.js","app":"_app/immutable/entry/app.26c335d2.js","imports":["_app/immutable/entry/start.be4397bc.js","_app/immutable/chunks/scheduler.35d2bb6c.js","_app/immutable/chunks/singletons.7ffeb657.js","_app/immutable/chunks/index.3b5b6fbf.js","_app/immutable/entry/app.26c335d2.js","_app/immutable/chunks/scheduler.35d2bb6c.js","_app/immutable/chunks/index.af391148.js"],"stylesheets":[],"fonts":[]},
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
