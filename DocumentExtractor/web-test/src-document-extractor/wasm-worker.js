var Module = {
    onRuntimeInitialized: () => {
        postMessage({'cmd': 'onRuntimeInitialized'});

        let wasmHelper = new WasmHelper();

        addEventListener('message', onMessage);

        function onMessage(e) {
            switch(e.data.cmd){
                case "processFrame":
                    wasmHelper.ProcessFrame(e.data.image)
                    break;
            }
        }
    }
};

importScripts('DocumentExtractor.js', '../helpers/WasmHelper.js');
