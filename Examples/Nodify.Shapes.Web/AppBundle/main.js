﻿import { dotnet } from './_framework/dotnet.js'

const is_browser = typeof window != "undefined";
if (!is_browser) throw new Error(`Expected to be running in a browser`);

const dotnetRuntime = await dotnet
    .withDiagnosticTracing(false)
    .withApplicationArgumentsFromQuery()
    .create();

dotnetRuntime.setModuleImports("main.js", {});
console.log(dotnetRuntime);

const config = dotnetRuntime.getConfig();

await dotnetRuntime.runMain(config.mainAssemblyName, []);