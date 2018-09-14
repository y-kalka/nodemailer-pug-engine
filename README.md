# Nodemailer-pug-engine

## Install

```bash
npm install nodemailer-pug-engine
```

## Configure
```typescript
import { pugEngine } from "nodemailer-pug-engine";
import { resolve } from 'path';

const mailer = createTransport(...)

mailer.use('compile', pugEngine({
    templateDir: resolve(__dirname, "templates")
}));

mailer.sendMail({
    to: '..',
    template: 'test',
    ctx: {
        // this is available in the template
    }
})
```
