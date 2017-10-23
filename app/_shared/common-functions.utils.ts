export class Utils {
    public static getBaseLocation() {
        let paths: string[] = location.pathname.split('/').splice(1, 1);
        let basePath: string = Utils.getVirtualDir();
        return '/' + basePath;
    }

    public static getVirtualDir(): string {
        let paths: string[] = location.pathname.split('/').splice(1, 1);
        let virtualDir: string = (paths && paths[0]) || 'SPA'; // Default: AUC
        return virtualDir;
    }
}