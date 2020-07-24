

## CSS

* Using sass, the files are processed by node-sass via npm scripts
* By default, the `scripts.scss` file is the primary build:
    ```bash
    npm run build-css
    ```
* Compile other files into their own build by passing a value for the variable: `f`
    ```bash
    f=print npm run build-css
    ```
* Options ([src](https://github.com/sass/node-sass/blob/master/bin/node-sass#L37)):
    ```
    'Options',
        '  -w, --watch                Watch a directory or file',
        '  -r, --recursive            Recursively watch directories or files',
        '  -o, --output               Output directory',
        '  -x, --omit-source-map-url  Omit source map URL comment from output',
        '  -i, --indented-syntax      Treat data from stdin as sass code (versus scss)',
        '  -q, --quiet                Suppress log output except on error',
        '  -v, --version              Prints version info',
        '  --output-style             CSS output style (nested | expanded | compact | compressed)',
        '  --indent-type              Indent type for output CSS (space | tab)',
        '  --indent-width             Indent width; number of spaces or tabs (maximum value: 10)',
        '  --linefeed                 Linefeed style (cr | crlf | lf | lfcr)',
        '  --source-comments          Include debug info in output',
        '  --source-map               Emit source map (boolean, or path to output .map file)',
        '  --source-map-contents      Embed include contents in map',
        '  --source-map-embed         Embed sourceMappingUrl as data URI',
        '  --source-map-root          Base path, will be emitted in source-map as is',
        '  --include-path             Path to look for imported files',
        '  --follow                   Follow symlinked directories',
        '  --precision                The amount of precision allowed in decimal numbers',
        '  --error-bell               Output a bell character on errors',
        '  --importer                 Path to .js file containing custom importer',
        '  --functions                Path to .js file containing custom functions',
        '  --help                     Print usage info'
    ```
