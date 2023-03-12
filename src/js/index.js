import {Metro5} from "@olton/metro5/src/core/metro"

globalThis.Metro5 = Metro5
globalThis.Metro = new Metro5({
    onInit: ()=>{

    }
})

import * as ResetCss from "@olton/metro5/src/common/reset"
import * as Cloak from "@olton/metro5/src/components/cloak"

const copyYear = $("#_copy-year")
copyYear.html(`2019-${datetime().year()}`)