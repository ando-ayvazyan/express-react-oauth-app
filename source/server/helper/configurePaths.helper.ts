const configurePathsHelper = ({rootPath, publicPath}: {rootPath: string; publicPath: string}) => {
	(global as any).ROOT_PATH = rootPath;
	(global as any).PUBLIC_PATH = publicPath;
};

export {
	configurePathsHelper
}