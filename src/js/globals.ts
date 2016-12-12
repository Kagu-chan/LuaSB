export default class Globals {
    static base: string = `${__dirname}/..`;
    static directorySeperator: string = "/";
    static viewPath: string = `${Globals.base}/view`;
    static startModule: string = `${Globals.viewPath}/main.html`;
}
