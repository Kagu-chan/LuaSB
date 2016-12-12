import electron from '../electron';

export default class LuaSB {
    static run = () => electron.registerAppEvents()
}
