import { resolve } from 'path';
import * as pug from 'pug';

export interface IPugEngineConfig {
    templateDir: string;
    pretty?: boolean;
}

export function pugEngine(conf: IPugEngineConfig) {
    return (maildata: any, cb: (err?) => void) => {
        const template = maildata.data.template;
        const ctx = maildata.data.ctx;

        // do nothing when no template is defined
        if (!template) {
            return cb();
        }

        const templateFile = resolve(conf.templateDir, template) + '.pug';

        // set options to pug
        if (conf.pretty === true) {
            ctx.pretty = true;
        }

        // render templates
        pug.renderFile(templateFile, ctx, (err, html: string) => {
            if (err) {
                cb(err);
                return;
            }
            maildata.data.html = html;
            cb();
        });
    };
}