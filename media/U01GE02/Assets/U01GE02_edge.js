/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'glow',
                type: 'rect',
                rect: ['171', '161','auto','auto','auto', 'auto']
            },
            {
                id: 'electrons',
                type: 'rect',
                rect: ['173', '110','auto','auto','auto', 'auto']
            },
            {
                id: 'tube',
                type: 'rect',
                rect: ['33px', '51px','auto','auto','auto', 'auto']
            },
            {
                id: 'bulb',
                type: 'rect',
                rect: ['319', '166','auto','auto','auto', 'auto']
            },
            {
                id: 'battery',
                type: 'rect',
                rect: ['32', '128','auto','auto','auto', 'auto']
            },
            {
                id: 'Timer',
                type: 'rect',
                rect: ['548', '240','auto','auto','auto', 'auto']
            },
            {
                id: 'correct',
                display: 'block',
                type: 'text',
                rect: ['356px', '326px','auto','auto','auto', 'auto'],
                text: "Consecutive correct:",
                align: "right",
                font: ['Verdana, Geneva, sans-serif', 12, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'eight',
                display: 'block',
                type: 'text',
                rect: ['521px', '326px','auto','auto','auto', 'auto'],
                text: "of 8",
                align: "left",
                font: ['Verdana, Geneva, sans-serif', 12, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'questans',
                display: 'block',
                type: 'text',
                rect: ['502px', '326px','auto','auto','auto', 'auto'],
                text: "3",
                align: "center",
                font: ['Verdana, Geneva, sans-serif', 12, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'ans_ccw_gr',
                type: 'rect',
                rect: ['190', '272','auto','auto','auto', 'auto']
            },
            {
                id: 'ans_ccw_btn',
                type: 'rect',
                rect: ['275', '287','auto','auto','auto', 'auto']
            },
            {
                id: 'ans_no_gr',
                type: 'rect',
                rect: ['170', '207','auto','auto','auto', 'auto']
            },
            {
                id: 'ans_no_btn',
                type: 'rect',
                rect: ['223', '287','auto','auto','auto', 'auto']
            },
            {
                id: 'ans_cw_gr',
                type: 'rect',
                rect: ['213', '125','auto','auto','auto', 'auto']
            },
            {
                id: 'ans_cw_btn',
                type: 'rect',
                rect: ['204', '158','auto','auto','auto', 'auto']
            },
            {
                id: 'applause',
                type: 'audio',
                tag: 'audio',
                rect: ['550', '179','320px','45px','auto', 'auto'],
                source: ['media/applause.ogg','media/applause.mp3']
            },
            {
                id: 'buttonclick',
                type: 'audio',
                tag: 'audio',
                rect: ['545', '186','320px','45px','auto', 'auto'],
                source: ['media/buttonclick.ogg','media/buttonclick.mp3']
            },
            {
                id: 'failure1',
                type: 'audio',
                tag: 'audio',
                rect: ['564', '172','320px','45px','auto', 'auto'],
                source: ['media/failure1.ogg','media/failure1.mp3']
            },
            {
                id: 'success1',
                type: 'audio',
                tag: 'audio',
                rect: ['550', '186','320px','45px','auto', 'auto'],
                source: ['media/success1.ogg','media/success1.mp3']
            },
            {
                id: 'feedback',
                type: 'text',
                rect: ['362px', '169px','157px','50px','auto', 'auto'],
                opacity: 1,
                align: "left",
                font: ['Verdana, Geneva, sans-serif', 12, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'next_btn',
                type: 'rect',
                rect: ['513', '251','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'begin',
                display: 'block',
                type: 'rect',
                rect: ['422', '117','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'phasetxt',
                type: 'text',
                rect: ['21px', '13px','244px','30px','auto', 'auto'],
                text: "Phase 1",
                align: "left",
                font: ['Verdana, Geneva, sans-serif', 16, "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'instructions',
                type: 'text',
                rect: ['18px', '39px','526px','18px','auto', 'auto'],
                text: "Answer eight consecutively correct to continue to Phase 2.",
                align: "left",
                font: ['Verdana, Geneva, sans-serif', 16, "rgba(0,0,0,1)", "400", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'glow',
                symbolName: 'glow'
            },
            {
                id: 'bulb',
                symbolName: 'bulb',
                autoPlay: {

                }
            },
            {
                id: 'ans_no_btn',
                symbolName: 'ans_no_btn',
                autoPlay: {

                }
            },
            {
                id: 'next_btn',
                symbolName: 'next',
                autoPlay: {

                }
            },
            {
                id: 'battery',
                symbolName: 'battery',
                autoPlay: {

                }
            },
            {
                id: 'ans_cw_btn',
                symbolName: 'ans_cw_btn',
                autoPlay: {

                }
            },
            {
                id: 'begin',
                symbolName: 'begin',
                autoPlay: {

                }
            },
            {
                id: 'tube',
                symbolName: 'tube',
                autoPlay: {

                }
            },
            {
                id: 'ans_no_gr',
                symbolName: 'ans_no_gr',
                autoPlay: {

                }
            },
            {
                id: 'ans_cw_gr',
                symbolName: 'ans_cw_gr',
                autoPlay: {

                }
            },
            {
                id: 'Timer',
                symbolName: 'Timer',
                autoPlay: {

                }
            },
            {
                id: 'ans_ccw_gr',
                symbolName: 'ans_ccw_gr',
                autoPlay: {

                }
            },
            {
                id: 'ans_ccw_btn',
                symbolName: 'ans_ccw_btn',
                autoPlay: {

                }
            },
            {
                id: 'electrons',
                symbolName: 'electrons',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_ans_no_btn}": [
                ["style", "top", '212px'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '156px'],
                ["transform", "scaleY", '0.5']
            ],
            "${_ans_no_gr}": [
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '156px'],
                ["style", "top", '212px']
            ],
            "${_feedback}": [
                ["style", "opacity", '1'],
                ["style", "left", '362px'],
                ["style", "font-size", '12px'],
                ["style", "top", '169px'],
                ["style", "text-align", 'left'],
                ["style", "height", '50px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "font-weight", 'bold'],
                ["style", "width", '157px']
            ],
            "${_phaseCopy}": [
                ["style", "top", '15px'],
                ["style", "font-size", '16px'],
                ["style", "height", '30px'],
                ["style", "font-weight", '700'],
                ["style", "left", '15px'],
                ["style", "width", '244px']
            ],
            "${_ans_ccw_gr}": [
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '124px'],
                ["style", "top", '247px']
            ],
            "${_instructions}": [
                ["style", "top", '39px'],
                ["style", "width", '526px'],
                ["style", "height", '18px'],
                ["style", "font-weight", '400'],
                ["style", "left", '18px'],
                ["style", "font-size", '16px']
            ],
            "${_ans_cw_btn}": [
                ["style", "top", '132px'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '124px'],
                ["transform", "scaleY", '0.5']
            ],
            "${_instructionsCopy}": [
                ["style", "top", '41px'],
                ["style", "width", '244px'],
                ["style", "height", '49px'],
                ["style", "font-weight", 'normal'],
                ["style", "left", '15px'],
                ["style", "font-size", '16px']
            ],
            "${_bulb}": [
                ["style", "top", '226px'],
                ["style", "left", '299px']
            ],
            "${_begin}": [
                ["style", "top", '358px'],
                ["style", "display", 'block'],
                ["style", "left", '188px'],
                ["style", "cursor", 'pointer']
            ],
            "${_questans}": [
                ["style", "top", '326px'],
                ["style", "text-align", 'center'],
                ["style", "display", 'block'],
                ["style", "left", '502px'],
                ["style", "width", '14px']
            ],
            "${_tube}": [
                ["style", "top", '51px'],
                ["style", "left", '33px']
            ],
            "${_ans_ccw_btn}": [
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '124px'],
                ["style", "top", '247px']
            ],
            "${_ans_cw_gr}": [
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '124px'],
                ["style", "top", '132px']
            ],
            "${_correct}": [
                ["style", "top", '326px'],
                ["style", "text-align", 'right'],
                ["style", "display", 'block'],
                ["style", "left", '356px'],
                ["style", "width", '140px']
            ],
            "${_Timer}": [
                ["style", "top", '118px'],
                ["style", "left", '362px']
            ],
            "${_phasetxt}": [
                ["style", "top", '13px'],
                ["style", "font-size", '16px'],
                ["style", "height", '30px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '21px'],
                ["style", "width", '244px']
            ],
            "${_next_btn}": [
                ["style", "top", '358px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '188px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'visible'],
                ["style", "height", '450px'],
                ["style", "width", '550px']
            ],
            "${_eight}": [
                ["style", "top", '326px'],
                ["style", "left", '521px'],
                ["style", "text-align", 'left'],
                ["style", "display", 'block']
            ],
            "${_electrons}": [
                ["style", "left", '40px'],
                ["style", "top", '78px']
            ],
            "${_battery}": [
                ["style", "top", '188px'],
                ["style", "left", '12px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 240000,
            autoPlay: true,
            labels: {
                "1.1": 0,
                "2.2": 120000,
                "3.3": 180000,
                "4.4": 240000
            },
            timeline: [
                { id: "eid1713", tween: [ "style", "${_begin}", "top", '358px', { fromValue: '358px'}], position: 0, duration: 0 },
                { id: "eid1734", tween: [ "style", "${_bulb}", "top", '226px', { fromValue: '226px'}], position: 0, duration: 0 },
                { id: "eid1836", tween: [ "style", "${_ans_no_gr}", "left", '156px', { fromValue: '156px'}], position: 0, duration: 0 },
                { id: "eid1724", tween: [ "style", "${_begin}", "left", '188px', { fromValue: '188px'}], position: 0, duration: 0 },
                { id: "eid1725", tween: [ "style", "${_next_btn}", "left", '188px', { fromValue: '188px'}], position: 0, duration: 0 },
                { id: "eid1731", tween: [ "style", "${_ans_ccw_gr}", "top", '247px', { fromValue: '247px'}], position: 0, duration: 0 },
                { id: "eid1736", tween: [ "style", "${_ans_cw_btn}", "top", '132px', { fromValue: '132px'}], position: 0, duration: 0 },
                { id: "eid1720", tween: [ "style", "${_Timer}", "top", '118px', { fromValue: '118px'}], position: 0, duration: 0 },
                { id: "eid1735", tween: [ "style", "${_battery}", "top", '188px', { fromValue: '188px'}], position: 0, duration: 0 },
                { id: "eid1723", tween: [ "style", "${_next_btn}", "top", '358px', { fromValue: '358px'}], position: 0, duration: 0 },
                { id: "eid1719", tween: [ "style", "${_Timer}", "left", '362px', { fromValue: '362px'}], position: 0, duration: 0 },
                { id: "eid1737", tween: [ "style", "${_ans_no_btn}", "top", '212px', { fromValue: '212px'}], position: 0, duration: 0 },
                { id: "eid1822", tween: [ "style", "${_ans_no_btn}", "left", '156px', { fromValue: '156px'}], position: 0, duration: 0 },
                { id: "eid1732", tween: [ "style", "${_electrons}", "top", '78px', { fromValue: '78px'}], position: 0, duration: 0 },
                { id: "eid1729", tween: [ "style", "${_ans_cw_gr}", "top", '132px', { fromValue: '132px'}], position: 0, duration: 0 },
                { id: "eid1733", tween: [ "style", "${_ans_ccw_btn}", "top", '247px', { fromValue: '247px'}], position: 0, duration: 0 },
                { id: "eid1730", tween: [ "style", "${_ans_no_gr}", "top", '212px', { fromValue: '212px'}], position: 0, duration: 0 },
                { id: "eid1171", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_ans_no_gr}', [] ], ""], position: 0 },
                { id: "eid1169", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_ans_cw_btn}', [] ], ""], position: 0 },
                { id: "eid1702", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_success1}', [] ], ""], position: 0 },
                { id: "eid1703", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_failure1}', [] ], ""], position: 0 },
                { id: "eid1704", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_buttonclick}', [] ], ""], position: 0 },
                { id: "eid1182", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_ans_no_btn}', [] ], ""], position: 0 },
                { id: "eid1204", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_ans_ccw_btn}', [] ], ""], position: 0 },
                { id: "eid1172", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_ans_ccw_gr}', [] ], ""], position: 0 },
                { id: "eid1170", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_ans_cw_gr}', [] ], ""], position: 0 },
                { id: "eid1705", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_applause}', [] ], ""], position: 0 }            ]
        }
    }
},
"Timer": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'text',
                    rect: ['1px', '-216px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'countdown',
                    text: '10<br>',
                    align: 'left',
                    font: ['Verdana, Geneva, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', '']
                },
                {
                    type: 'text',
                    rect: ['-2px', '5px', 'auto', 'auto', 'auto', 'auto'],
                    align: 'center',
                    id: 'time',
                    text: 'Timer:',
                    opacity: 1,
                    font: ['Verdana, Geneva, sans-serif', 15, 'rgba(0,0,0,1)', 'normal', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_countdown}": [
                ["style", "top", '-1px'],
                ["style", "width", '41px'],
                ["style", "text-align", 'left'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '60px'],
                ["style", "font-size", '24px']
            ],
            "${symbolSelector}": [
                ["style", "height", '30px'],
                ["style", "width", '100px']
            ],
            "${_time}": [
                ["style", "top", '5px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "opacity", '1'],
                ["style", "left", '-2px'],
                ["style", "font-size", '15px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: false,
            labels: {
                "start": 0
            },
            timeline: [
                { id: "eid53", tween: [ "color", "${_countdown}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
                { id: "eid51", tween: [ "color", "${_countdown}", "color", 'rgba(242,13,13,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 7000, duration: 0 },
                { id: "eid620", tween: [ "style", "${_countdown}", "left", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
                { id: "eid621", tween: [ "style", "${_countdown}", "top", '-1px', { fromValue: '-1px'}], position: 0, duration: 0 }            ]
        }
    }
},
"circuit": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    rect: ['0px', '0px', '272px', '273px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [3, 'rgba(0,0,0,1)', 'solid'],
                    display: 'block',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    rect: ['262px', '124px', '25px', '25px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse',
                    stroke: [3, 'rgb(0, 0, 0)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [3, 'rgb(0, 0, 0)', 'none'],
                    rect: ['112px', '-15px', '73px', '25px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    transform: [[0, 0], ['-31']],
                    type: 'rect',
                    rect: ['106px', '-14px', '61px', '0px', 'auto', 'auto'],
                    id: 'Rectangle3',
                    stroke: [3, 'rgb(0, 0, 0)', 'solid'],
                    clip: ['rect(0px 73px 4.625px 0px)'],
                    fill: ['rgba(192,192,192,0)']
                },
                {
                    transform: [[0, 0], [], [], ['0.75', '0.75']],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    rect: ['96px', '-14px', '25px', '25px', 'auto', 'auto'],
                    id: 'EllipseCopy',
                    stroke: [3, 'rgb(0, 0, 0)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    transform: [[0, 0], [], [], ['0.75', '0.75']],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    rect: ['172px', '-14px', '25px', '25px', 'auto', 'auto'],
                    id: 'EllipseCopy2',
                    stroke: [3, 'rgb(0, 0, 0)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text2',
                    text: 'X',
                    align: 'left',
                    rect: ['270px', '127px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['-13px', '127px', '25px', '25px', 'auto', 'auto'],
                    id: 'Rectangle4',
                    stroke: [3, 'rgb(0, 0, 0)', 'none'],
                    clip: ['rect(0px 25px 15.5888671875px 0px)'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    type: 'rect',
                    rect: ['-20px', '125px', '34px', '6px', 'auto', 'auto'],
                    id: 'Rectangle5',
                    stroke: [3, 'rgb(0, 0, 0)', 'solid'],
                    clip: ['rect(0px 40px 3.3388671875px 0px)'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    transform: [[0, 0], [], [], ['0.86957']],
                    type: 'rect',
                    rect: ['-23px', '137px', '34px', '6px', 'auto', 'auto'],
                    id: 'Rectangle5Copy',
                    stroke: [6, 'rgb(0, 0, 0)', 'solid'],
                    clip: ['rect(0px 46px 6.1572265625px 0px)'],
                    fill: ['rgba(255,255,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "border-style", 'none']
            ],
            "${_Text2}": [
                ["style", "top", '127px'],
                ["style", "left", '270px'],
                ["style", "font-size", '24px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "border-width", '3px'],
                ["style", "display", 'block'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_EllipseCopy2}": [
                ["style", "top", '-14px'],
                ["transform", "scaleY", '0.75'],
                ["transform", "scaleX", '0.75'],
                ["style", "border-width", '3px'],
                ["style", "left", '172px'],
                ["color", "background-color", 'rgba(255,255,255,1)']
            ],
            "${_Rectangle3}": [
                ["style", "top", '-14px'],
                ["transform", "rotateZ", '-31deg'],
                ["style", "height", '0px'],
                ["style", "clip", [0,73,4.625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '106px'],
                ["style", "width", '61px']
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '262px']
            ],
            "${symbolSelector}": [
                ["style", "height", '279px'],
                ["style", "width", '278px']
            ],
            "${_Rectangle5}": [
                ["style", "border-style", 'solid'],
                ["style", "clip", [0,40,3.3388671875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '34px']
            ],
            "${_Rectangle5Copy}": [
                ["style", "top", '137px'],
                ["style", "left", '-23px'],
                ["style", "border-width", '6px'],
                ["transform", "scaleX", '0.86957'],
                ["style", "border-style", 'solid'],
                ["style", "clip", [0,46,6.1572265625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '34px']
            ],
            "${_Rectangle4}": [
                ["style", "clip", [0,25,15.5888671875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-style", 'none']
            ],
            "${_EllipseCopy}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.75'],
                ["transform", "scaleX", '0.75'],
                ["style", "top", '-14px'],
                ["style", "left", '96px'],
                ["style", "border-width", '3px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
                { id: "eid239", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"phase1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'Text',
                    text: 'Phase 1.1',
                    cursor: ['pointer'],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "font-size", '12px']
            ],
            "${symbolSelector}": [
                ["style", "height", '14px'],
                ["style", "width", '55px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            labels: {
                "up": 0,
                "over": 1000,
                "down": 2000
            },
            timeline: [
                { id: "eid244", tween: [ "color", "${_Text}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 0 },
                { id: "eid245", tween: [ "color", "${_Text}", "color", 'rgba(106,106,106,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1000, duration: 0 },
                { id: "eid246", tween: [ "color", "${_Text}", "color", 'rgba(241,7,7,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(106,106,106,1.00)'}], position: 2000, duration: 0 }            ]
        }
    }
},
"phase2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'Text',
                    text: 'Phase 2.2',
                    cursor: ['pointer'],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "font-size", '12px']
            ],
            "${symbolSelector}": [
                ["style", "height", '14px'],
                ["style", "width", '55px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            labels: {
                "up": 0,
                "over": 1000,
                "down": 2000
            },
            timeline: [
                { id: "eid244", tween: [ "color", "${_Text}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 0 },
                { id: "eid245", tween: [ "color", "${_Text}", "color", 'rgba(106,106,106,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1000, duration: 0 },
                { id: "eid246", tween: [ "color", "${_Text}", "color", 'rgba(241,7,7,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(106,106,106,1.00)'}], position: 2000, duration: 0 }            ]
        }
    }
},
"phase3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'Text',
                    text: 'Phase 3.3',
                    cursor: ['pointer'],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "font-size", '12px']
            ],
            "${symbolSelector}": [
                ["style", "height", '14px'],
                ["style", "width", '55px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            labels: {
                "up": 0,
                "over": 1000,
                "down": 2000
            },
            timeline: [
                { id: "eid244", tween: [ "color", "${_Text}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 0 },
                { id: "eid245", tween: [ "color", "${_Text}", "color", 'rgba(106,106,106,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1000, duration: 0 },
                { id: "eid246", tween: [ "color", "${_Text}", "color", 'rgba(241,7,7,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(106,106,106,1.00)'}], position: 2000, duration: 0 }            ]
        }
    }
},
"phase4": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'Text',
                    text: 'Phase 4.4',
                    cursor: ['pointer'],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "font-size", '12px']
            ],
            "${symbolSelector}": [
                ["style", "height", '14px'],
                ["style", "width", '55px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            labels: {
                "up": 0,
                "over": 1000,
                "down": 2000
            },
            timeline: [
                { id: "eid244", tween: [ "color", "${_Text}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 0 },
                { id: "eid245", tween: [ "color", "${_Text}", "color", 'rgba(106,106,106,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1000, duration: 0 },
                { id: "eid246", tween: [ "color", "${_Text}", "color", 'rgba(241,7,7,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(106,106,106,1.00)'}], position: 2000, duration: 0 }            ]
        }
    }
},
"phase11": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(233,8,8,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'phase11',
                    text: 'Phase 1.1',
                    cursor: ['default'],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '14px'],
                ["style", "width", '55px']
            ],
            "${_phase11}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(233,8,8,1.00)'],
                ["style", "left", '0px'],
                ["style", "cursor", 'default']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"phase22": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(233,8,8,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'phase22',
                    text: 'Phase 2.2',
                    cursor: ['default'],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_phase22}": [
                ["color", "color", 'rgba(233,8,8,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'default']
            ],
            "${symbolSelector}": [
                ["style", "height", '14px'],
                ["style", "width", '55px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"phase33": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(233,8,8,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'phase33',
                    text: 'Phase 3.3',
                    cursor: ['default'],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_phase33}": [
                ["color", "color", 'rgba(233,8,8,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'default']
            ],
            "${symbolSelector}": [
                ["style", "height", '14px'],
                ["style", "width", '55px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"phase44": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(233,8,8,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'phase44',
                    text: 'Phase 4.4',
                    cursor: ['default'],
                    rect: ['81px', '12px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '14px'],
                ["style", "width", '55px']
            ],
            "${_phase44}": [
                ["color", "color", 'rgba(233,8,8,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'default']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"electron": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0', '0', '60px', '60px', 'auto', 'auto'],
                    id: 'Blue_Electron_Face2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/Blue_Electron_Face2.png', '0px', '0px']
                },
                {
                    rect: ['0', '0', '60px', '60px', 'auto', 'auto'],
                    id: 'Blue_Electron_60x602',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/Blue_Electron_60x602.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '60px', '60px', 'auto', 'auto'],
                    id: 'Green_Face_Smile_A11_Game2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/Green_Face_Smile_A11_Game2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '60px'],
                ["style", "width", '60px']
            ],
            "${_Green_Face_Smile_A11_Game2}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '60px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '60px']
            ],
            "${_Blue_Electron_Face2}": [
                ["style", "display", 'none']
            ],
            "${_Blue_Electron_60x602}": [
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: false,
            labels: {
                "plain": 0,
                "smile": 15000
            },
            timeline: [
                { id: "eid583", tween: [ "style", "${_Blue_Electron_Face2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid580", tween: [ "style", "${_Blue_Electron_Face2}", "display", 'none', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid582", tween: [ "style", "${_Blue_Electron_60x602}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid579", tween: [ "style", "${_Blue_Electron_60x602}", "display", 'block', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid1804", tween: [ "style", "${_Green_Face_Smile_A11_Game2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1805", tween: [ "style", "${_Green_Face_Smile_A11_Game2}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 }            ]
        }
    }
},
"electrons": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'elect01',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect02',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect03',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect04',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect05',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect06',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect07',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect08',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect09',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect10',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect11',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect12',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect13',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect14',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect15',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect16',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect17',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect18',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect19',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect20',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect21',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect22',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect23',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect24',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect25',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect26',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect27',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect28',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect29',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect30',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect31',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect32',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect33',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect34',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect35',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'elect36',
                    type: 'rect',
                    rect: ['18px', '51px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'elect07',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect06',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect33',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect15',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect03',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect12',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect17',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect32',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect04',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect14',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect18',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect27',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect10',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect19',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect31',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect30',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect11',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect21',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect01',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect08',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect24',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect35',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect34',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect13',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect23',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect02',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect26',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect05',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect28',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect25',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect29',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect36',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect22',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect09',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect20',
                symbolName: 'electron',
                autoPlay: {

               }
            },
            {
                id: 'elect16',
                symbolName: 'electron',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_elect27}": [
                ["style", "top", '52px'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '261px'],
                ["transform", "scaleY", '0.5']
            ],
            "${_elect29}": [
                ["transform", "scaleX", '0.5'],
                ["style", "top", '28px'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '214px']
            ],
            "${_elect03}": [
                ["transform", "scaleX", '0.5'],
                ["style", "top", '99px'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '-12px']
            ],
            "${_elect25}": [
                ["transform", "scaleX", '0.5'],
                ["style", "top", '110px'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '261px']
            ],
            "${_elect06}": [
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '-12px'],
                ["style", "top", '186px']
            ],
            "${_elect13}": [
                ["style", "top", '303px'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '87px'],
                ["transform", "scaleY", '0.5']
            ],
            "${_elect12}": [
                ["style", "top", '303px'],
                ["style", "left", '57px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5']
            ],
            "${_elect04}": [
                ["style", "top", '128px'],
                ["style", "left", '-12px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5']
            ],
            "${_elect23}": [
                ["style", "top", '168px'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '261px'],
                ["transform", "scaleY", '0.5']
            ],
            "${_elect17}": [
                ["style", "top", '303px'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '207px'],
                ["transform", "scaleY", '0.5']
            ],
            "${_elect36}": [
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '15px'],
                ["style", "top", '28px']
            ],
            "${_elect22}": [
                ["style", "top", '197px'],
                ["style", "left", '261px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5']
            ],
            "${_elect35}": [
                ["style", "top", '28px'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '44px'],
                ["transform", "scaleY", '0.5']
            ],
            "${_elect28}": [
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '243px'],
                ["style", "top", '28px']
            ],
            "${_elect11}": [
                ["transform", "scaleX", '0.5'],
                ["style", "top", '303px'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '27px']
            ],
            "${_elect10}": [
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '-3px'],
                ["style", "top", '301px']
            ],
            "${symbolSelector}": [
                ["style", "height", '350px'],
                ["style", "width", '325px']
            ],
            "${_elect21}": [
                ["style", "top", '226px'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '261px'],
                ["transform", "scaleY", '0.5']
            ],
            "${_elect18}": [
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '237px'],
                ["style", "top", '303px']
            ],
            "${_elect34}": [
                ["style", "top", '28px'],
                ["style", "left", '73px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5']
            ],
            "${_elect31}": [
                ["transform", "scaleX", '0.5'],
                ["style", "top", '28px'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '157px']
            ],
            "${_elect33}": [
                ["transform", "scaleX", '0.5'],
                ["style", "top", '28px'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '101px']
            ],
            "${_elect32}": [
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '130px'],
                ["style", "top", '28px']
            ],
            "${_elect08}": [
                ["style", "top", '244px'],
                ["style", "left", '-12px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5']
            ],
            "${_elect14}": [
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '117px'],
                ["style", "top", '303px']
            ],
            "${_elect07}": [
                ["transform", "scaleX", '0.5'],
                ["style", "top", '215px'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '-12px']
            ],
            "${_elect19}": [
                ["transform", "scaleX", '0.5'],
                ["style", "top", '284px'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '260px']
            ],
            "${_elect30}": [
                ["style", "top", '28px'],
                ["style", "left", '185px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5']
            ],
            "${_elect15}": [
                ["transform", "scaleX", '0.5'],
                ["style", "top", '303px'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '147px']
            ],
            "${_elect09}": [
                ["style", "top", '273px'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '-12px'],
                ["transform", "scaleY", '0.5']
            ],
            "${_elect26}": [
                ["style", "top", '81px'],
                ["style", "left", '261px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5']
            ],
            "${_elect01}": [
                ["style", "top", '41px'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '-12px'],
                ["transform", "scaleY", '0.5']
            ],
            "${_elect16}": [
                ["style", "top", '303px'],
                ["style", "left", '177px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5']
            ],
            "${_elect05}": [
                ["style", "top", '157px'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '-12px'],
                ["transform", "scaleY", '0.5']
            ],
            "${_elect20}": [
                ["style", "top", '255px'],
                ["style", "left", '261px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5']
            ],
            "${_elect24}": [
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '261px'],
                ["style", "top", '139px']
            ],
            "${_elect02}": [
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '-12px'],
                ["style", "top", '70px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 30000,
            autoPlay: false,
            labels: {
                "closed": 0,
                "clock": 15000,
                "loop2": 15250,
                "counter": 20000,
                "loop1": 20250,
                "clear": 22500,
                "open": 30000
            },
            timeline: [
                { id: "eid1607", tween: [ "style", "${_elect32}", "top", '28px', { fromValue: '28px'}], position: 0, duration: 0 },
                { id: "eid1091", tween: [ "style", "${_elect32}", "top", '2px', { fromValue: '28px'}], position: 30000, duration: 0 },
                { id: "eid1605", tween: [ "style", "${_elect33}", "top", '28px', { fromValue: '28px'}], position: 0, duration: 0 },
                { id: "eid1077", tween: [ "style", "${_elect33}", "top", '18px', { fromValue: '28px'}], position: 30000, duration: 0 },
                { id: "eid1606", tween: [ "style", "${_elect32}", "left", '130px', { fromValue: '130px'}], position: 0, duration: 0 },
                { id: "eid1093", tween: [ "style", "${_elect32}", "left", '126px', { fromValue: '130px'}], position: 30000, duration: 0 },
                { id: "eid1608", tween: [ "style", "${_elect31}", "left", '157px', { fromValue: '157px'}], position: 0, duration: 0 },
                { id: "eid1094", tween: [ "style", "${_elect31}", "left", '151px', { fromValue: '157px'}], position: 30000, duration: 0 },
                { id: "eid1609", tween: [ "style", "${_elect31}", "top", '28px', { fromValue: '28px'}], position: 0, duration: 0 },
                { id: "eid1092", tween: [ "style", "${_elect31}", "top", '-13px', { fromValue: '28px'}], position: 30000, duration: 0 }            ]
        }
    }
},
"ans_cw_gr": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '206px', '134px', 'auto', 'auto'],
                    id: 'answer_top_neutral_state',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/answer_top_neutral_state.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '205px', '133px', 'auto', 'auto'],
                    id: 'answer_top_down_state',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/answer_top_down_state.png', '0px', '0px']
                },
                {
                    rect: ['-100px', '95px', '100px', '100px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.5', '0.5']],
                    id: 'x_incorrectCopy',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/x_incorrect.png', '0px', '0px']
                },
                {
                    rect: ['-110px', '17px', '100px', '100px', 'auto', 'auto'],
                    id: 'check_correct2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/check_correct.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_answer_top_neutral_state}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '134px'],
                ["style", "width", '206px']
            ],
            "${_check_correct2}": [
                ["style", "top", '17px'],
                ["style", "left", '-110px'],
                ["style", "display", 'none']
            ],
            "${_answer_top_down_state}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_x_incorrectCopy}": [
                ["style", "top", '27px'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '1'],
                ["style", "height", '80px'],
                ["style", "left", '-100px'],
                ["style", "width", '80px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 120000,
            autoPlay: false,
            labels: {
                "up": 0,
                "down": 1000,
                "no": 2000,
                "yes": 4000,
                "correct": 60000,
                "wrong": 120000
            },
            timeline: [
                { id: "eid1693", tween: [ "style", "${_answer_top_down_state}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1691", tween: [ "style", "${_answer_top_down_state}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1146", tween: [ "style", "${_x_incorrectCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1682", tween: [ "style", "${_x_incorrectCopy}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1683", tween: [ "style", "${_x_incorrectCopy}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid1149", tween: [ "style", "${_x_incorrectCopy}", "display", 'block', { fromValue: 'none'}], position: 120000, duration: 0 },
                { id: "eid1694", tween: [ "style", "${_answer_top_neutral_state}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1692", tween: [ "style", "${_answer_top_neutral_state}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid1145", tween: [ "style", "${_check_correct2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1684", tween: [ "style", "${_check_correct2}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid1147", tween: [ "style", "${_check_correct2}", "display", 'block', { fromValue: 'block'}], position: 60000, duration: 0 },
                { id: "eid1148", tween: [ "style", "${_check_correct2}", "display", 'none', { fromValue: 'block'}], position: 120000, duration: 0 }            ]
        }
    }
},
"ans_no_gr": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    display: 'none',
                    rect: ['-100px', '95px', '100px', '100px', 'auto', 'auto'],
                    id: 'x_incorrectCopy',
                    fill: ['rgba(0,0,0,0)', 'images/x_incorrect.png', '0px', '0px']
                },
                {
                    rect: ['-110px', '17px', '100px', '100px', 'auto', 'auto'],
                    id: 'check_correct2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/check_correct.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '140px', '88px', 'auto', 'auto'],
                    id: 'answer_mid_down_state',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/answer_mid_down_state.png', '0px', '0px']
                },
                {
                    rect: ['34px', '23px', '140px', '88px', 'auto', 'auto'],
                    id: 'answer_mid_neutral_state',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/answer_mid_neutral_state.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_answer_mid_neutral_state}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '88px'],
                ["style", "width", '140px']
            ],
            "${_check_correct2}": [
                ["style", "top", '-13px'],
                ["style", "left", '-140px'],
                ["style", "display", 'none']
            ],
            "${_answer_mid_down_state}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_x_incorrectCopy}": [
                ["style", "top", '3px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "display", 'none'],
                ["style", "height", '80px'],
                ["style", "left", '-130px'],
                ["style", "width", '80px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 30000,
            autoPlay: false,
            labels: {
                "up": 0,
                "down": 1000,
                "no": 2000,
                "yes": 4000,
                "correct": 15000,
                "wrong": 30000
            },
            timeline: [
                { id: "eid1832", tween: [ "style", "${_answer_mid_down_state}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1833", tween: [ "style", "${_answer_mid_down_state}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1146", tween: [ "style", "${_x_incorrectCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1685", tween: [ "style", "${_x_incorrectCopy}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1687", tween: [ "style", "${_x_incorrectCopy}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid1149", tween: [ "style", "${_x_incorrectCopy}", "display", 'block', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid1834", tween: [ "style", "${_x_incorrectCopy}", "top", '3px', { fromValue: '3px'}], position: 2000, duration: 0 },
                { id: "eid1145", tween: [ "style", "${_check_correct2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1686", tween: [ "style", "${_check_correct2}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid1147", tween: [ "style", "${_check_correct2}", "display", 'block', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid1148", tween: [ "style", "${_check_correct2}", "display", 'none', { fromValue: 'block'}], position: 30000, duration: 0 },
                { id: "eid1830", tween: [ "style", "${_answer_mid_neutral_state}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1831", tween: [ "style", "${_answer_mid_neutral_state}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1695", tween: [ "style", "${_answer_mid_neutral_state}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1697", tween: [ "style", "${_answer_mid_neutral_state}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid1835", tween: [ "style", "${_check_correct2}", "top", '-13px', { fromValue: '-13px'}], position: 4000, duration: 0 }            ]
        }
    }
},
"ans_ccw_gr": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '204px', '133px', 'auto', 'auto'],
                    id: 'answer_bottom_down_state',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/answer_bottom_down_state.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '206px', '134px', 'auto', 'auto'],
                    id: 'answer_bottom_neutral_state',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/answer_bottom_neutral_state.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    display: 'none',
                    rect: ['-100px', '95px', '100px', '100px', 'auto', 'auto'],
                    id: 'x_incorrectCopy',
                    fill: ['rgba(0,0,0,0)', 'images/x_incorrect.png', '0px', '0px']
                },
                {
                    rect: ['-110px', '17px', '100px', '100px', 'auto', 'auto'],
                    id: 'check_correct2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/check_correct.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_answer_bottom_down_state}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '134px'],
                ["style", "width", '206px']
            ],
            "${_check_correct2}": [
                ["style", "top", '17px'],
                ["style", "left", '-110px'],
                ["style", "display", 'none']
            ],
            "${_answer_bottom_neutral_state}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_x_incorrectCopy}": [
                ["style", "top", '27px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "display", 'none'],
                ["style", "height", '80px'],
                ["style", "left", '-100px'],
                ["style", "width", '80px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 120000,
            autoPlay: false,
            labels: {
                "up": 0,
                "down": 1000,
                "no": 2000,
                "yes": 4000,
                "correct": 60000,
                "wrong": 120000
            },
            timeline: [
                { id: "eid1145", tween: [ "style", "${_check_correct2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1689", tween: [ "style", "${_check_correct2}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid1147", tween: [ "style", "${_check_correct2}", "display", 'block', { fromValue: 'block'}], position: 60000, duration: 0 },
                { id: "eid1148", tween: [ "style", "${_check_correct2}", "display", 'none', { fromValue: 'block'}], position: 120000, duration: 0 },
                { id: "eid1146", tween: [ "style", "${_x_incorrectCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1688", tween: [ "style", "${_x_incorrectCopy}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1690", tween: [ "style", "${_x_incorrectCopy}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid1149", tween: [ "style", "${_x_incorrectCopy}", "display", 'block', { fromValue: 'none'}], position: 120000, duration: 0 },
                { id: "eid1701", tween: [ "style", "${_answer_bottom_down_state}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1700", tween: [ "style", "${_answer_bottom_down_state}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1840", tween: [ "style", "${_answer_bottom_neutral_state}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1699", tween: [ "style", "${_answer_bottom_neutral_state}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }            ]
        }
    }
},
"ans_cw_btn": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '206px', '134px', 'auto', 'auto'],
                    id: 'answer_top_down_state',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/answer_top_down_state.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '206px', '134px', 'auto', 'auto'],
                    id: 'answer_top_over_state',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/answer_top_over_state.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '206px', '134px', 'auto', 'auto'],
                    id: 'answer_top_neutral_state3',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/answer_top_neutral_state.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_answer_top_over_state}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '133px'],
                ["style", "width", '205px']
            ],
            "${_answer_top_down_state}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_answer_top_neutral_state3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 120000,
            autoPlay: false,
            labels: {
                "up": 0,
                "over": 60000,
                "down": 120000
            },
            timeline: [
                { id: "eid1814", tween: [ "style", "${_answer_top_neutral_state3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1815", tween: [ "style", "${_answer_top_neutral_state3}", "display", 'none', { fromValue: 'block'}], position: 60000, duration: 0 },
                { id: "eid1816", tween: [ "style", "${_answer_top_over_state}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1818", tween: [ "style", "${_answer_top_over_state}", "display", 'block', { fromValue: 'none'}], position: 60000, duration: 0 },
                { id: "eid1817", tween: [ "style", "${_answer_top_over_state}", "display", 'none', { fromValue: 'block'}], position: 120000, duration: 0 },
                { id: "eid1820", tween: [ "style", "${_answer_top_down_state}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1819", tween: [ "style", "${_answer_top_down_state}", "display", 'none', { fromValue: 'none'}], position: 60000, duration: 0 },
                { id: "eid1821", tween: [ "style", "${_answer_top_down_state}", "display", 'block', { fromValue: 'none'}], position: 120000, duration: 0 }            ]
        }
    }
},
"ans_no_btn": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '140px', '88px', 'auto', 'auto'],
                    id: 'answer_mid_down_state',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/answer_mid_down_state.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '140px', '88px', 'auto', 'auto'],
                    id: 'answer_mid_over_state',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/answer_mid_over_state.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '140px', '88px', 'auto', 'auto'],
                    id: 'answer_mid_neutral_state',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/answer_mid_neutral_state.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_answer_mid_neutral_state}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_answer_mid_over_state}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '88px'],
                ["style", "width", '140px']
            ],
            "${_answer_mid_down_state}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 120000,
            autoPlay: false,
            labels: {
                "up": 0,
                "over": 60000,
                "down": 120000
            },
            timeline: [
                { id: "eid1216", tween: [ "style", "${_answer_mid_down_state}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1217", tween: [ "style", "${_answer_mid_down_state}", "display", 'block', { fromValue: 'none'}], position: 120000, duration: 0 },
                { id: "eid1214", tween: [ "style", "${_answer_mid_neutral_state}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1220", tween: [ "style", "${_answer_mid_neutral_state}", "display", 'none', { fromValue: 'block'}], position: 60000, duration: 0 },
                { id: "eid1215", tween: [ "style", "${_answer_mid_over_state}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1218", tween: [ "style", "${_answer_mid_over_state}", "display", 'block', { fromValue: 'none'}], position: 60000, duration: 0 },
                { id: "eid1219", tween: [ "style", "${_answer_mid_over_state}", "display", 'none', { fromValue: 'block'}], position: 120000, duration: 0 }            ]
        }
    }
},
"ans_ccw_btn": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '206px', '134px', 'auto', 'auto'],
                    id: 'answer_bottom_down_state2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/answer_bottom_down_state.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '206px', '134px', 'auto', 'auto'],
                    id: 'answer_bottom_over_state',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/answer_bottom_over_state.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '206px', '134px', 'auto', 'auto'],
                    id: 'answer_bottom_neutral_state',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/answer_bottom_neutral_state.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '134px'],
                ["style", "width", '206px']
            ],
            "${_answer_bottom_over_state}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_answer_bottom_neutral_state}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_answer_bottom_down_state2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 120000,
            autoPlay: false,
            labels: {
                "up": 0,
                "over": 60000,
                "down": 120000
            },
            timeline: [
                { id: "eid1829", tween: [ "style", "${_answer_bottom_down_state2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1828", tween: [ "style", "${_answer_bottom_down_state2}", "display", 'block', { fromValue: 'none'}], position: 120000, duration: 0 },
                { id: "eid1823", tween: [ "style", "${_answer_bottom_neutral_state}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1824", tween: [ "style", "${_answer_bottom_neutral_state}", "display", 'none', { fromValue: 'block'}], position: 60000, duration: 0 },
                { id: "eid1826", tween: [ "style", "${_answer_bottom_over_state}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1825", tween: [ "style", "${_answer_bottom_over_state}", "display", 'block', { fromValue: 'none'}], position: 60000, duration: 0 },
                { id: "eid1827", tween: [ "style", "${_answer_bottom_over_state}", "display", 'none', { fromValue: 'block'}], position: 120000, duration: 0 }            ]
        }
    }
},
"electron_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '167px', '166px', 'auto', 'auto'],
                    id: 'Electron',
                    fill: ['rgba(0,0,0,0)', 'images/Electron6.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0px', '0px', '167px', '166px', 'auto', 'auto'],
                    id: 'Electron_plain',
                    fill: ['rgba(0,0,0,0)', 'images/Electron_plain8.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '166px'],
                ["style", "width", '167px']
            ],
            "${_Electron_plain}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_Electron}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            labels: {
                "plain": 0,
                "smile": 1000
            },
            timeline: [
                { id: "eid319", tween: [ "style", "${_Electron_plain}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid321", tween: [ "style", "${_Electron}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid320", tween: [ "style", "${_Electron}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 }            ]
        }
    }
},
"tube": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.6', '0.6']],
                    rect: ['-107px', '-129px', '534px', '643px', 'auto', 'auto'],
                    display: 'block',
                    id: 'tube_closed2',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/tube_closed6.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.6', '0.6']],
                    rect: ['0px', '0px', '534px', '643px', 'auto', 'auto'],
                    display: 'none',
                    id: 'tube_open',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/tube_open6.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['24', '33', '579px', '588px', 'auto', 'auto'],
                    id: 'Schematic_Stage4_1',
                    fill: ['rgba(0,0,0,0)', 'images/Schematic_Stage4_16.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['24', '33', '579px', '588px', 'auto', 'auto'],
                    id: 'Schematic_Stage4_2',
                    fill: ['rgba(0,0,0,0)', 'images/Schematic_Stage4_26.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['24', '33', '579px', '588px', 'auto', 'auto'],
                    id: 'Schematic_Stage4_3',
                    fill: ['rgba(0,0,0,0)', 'images/Schematic_Stage4_36.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['24', '33', '579px', '588px', 'auto', 'auto'],
                    id: 'Schematic_Stage4_4',
                    fill: ['rgba(0,0,0,0)', 'images/Schematic_Stage4_46.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Schematic_Stage4_2}": [
                ["style", "top", '-84px'],
                ["transform", "scaleY", '0.64'],
                ["style", "display", 'none'],
                ["style", "left", '-120px'],
                ["transform", "scaleX", '0.64']
            ],
            "${_Schematic_Stage4_1}": [
                ["style", "top", '-84px'],
                ["transform", "scaleY", '0.64'],
                ["style", "display", 'none'],
                ["style", "left", '-120px'],
                ["transform", "scaleX", '0.64']
            ],
            "${_Schematic_Stage4_4}": [
                ["style", "top", '-84px'],
                ["transform", "scaleY", '0.64'],
                ["style", "display", 'none'],
                ["style", "left", '-120px'],
                ["transform", "scaleX", '0.64']
            ],
            "${symbolSelector}": [
                ["style", "height", '386px'],
                ["style", "width", '320px']
            ],
            "${_tube_open}": [
                ["style", "top", '-129px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "scaleX", '0.6'],
                ["style", "left", '-107px'],
                ["style", "display", 'none']
            ],
            "${_tube_closed2}": [
                ["style", "top", '-129px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "scaleX", '0.6'],
                ["style", "left", '-107px'],
                ["style", "display", 'block']
            ],
            "${_Schematic_Stage4_3}": [
                ["style", "top", '-84px'],
                ["transform", "scaleY", '0.64'],
                ["style", "display", 'none'],
                ["style", "left", '-120px'],
                ["transform", "scaleX", '0.64']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: false,
            labels: {
                "p1s1": 0,
                "p1s2": 1000,
                "p1s3": 2000,
                "p1s4": 3000,
                "p2s1": 4000,
                "p2s2": 5000,
                "p2s3": 6000,
                "p2s4": 7000,
                "p3s1": 8000,
                "p3s2": 9000,
                "p3s3": 10000,
                "p3s4": 11000,
                "p4s1": 12000,
                "p4s2": 13000,
                "p4s3": 14000,
                "p4s4": 15000
            },
            timeline: [
                { id: "eid539", tween: [ "style", "${_Schematic_Stage4_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid519", tween: [ "style", "${_Schematic_Stage4_1}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid566", tween: [ "style", "${_Schematic_Stage4_1}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid538", tween: [ "style", "${_Schematic_Stage4_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid518", tween: [ "style", "${_Schematic_Stage4_2}", "display", 'none', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid567", tween: [ "style", "${_Schematic_Stage4_2}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid568", tween: [ "style", "${_Schematic_Stage4_2}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0 },
                { id: "eid187", tween: [ "style", "${_tube_closed2}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid508", tween: [ "style", "${_tube_closed2}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid510", tween: [ "style", "${_tube_closed2}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid512", tween: [ "style", "${_tube_closed2}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid514", tween: [ "style", "${_tube_closed2}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid536", tween: [ "style", "${_Schematic_Stage4_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid516", tween: [ "style", "${_Schematic_Stage4_4}", "display", 'none', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid571", tween: [ "style", "${_Schematic_Stage4_4}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid537", tween: [ "style", "${_Schematic_Stage4_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid517", tween: [ "style", "${_Schematic_Stage4_3}", "display", 'none', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid569", tween: [ "style", "${_Schematic_Stage4_3}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid570", tween: [ "style", "${_Schematic_Stage4_3}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
                { id: "eid505", tween: [ "style", "${_tube_open}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid506", tween: [ "style", "${_tube_open}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid507", tween: [ "style", "${_tube_open}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid509", tween: [ "style", "${_tube_open}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid511", tween: [ "style", "${_tube_open}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
                { id: "eid513", tween: [ "style", "${_tube_open}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid515", tween: [ "style", "${_tube_open}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 }            ]
        }
    }
},
"battery": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.6', '0.6']],
                    rect: ['-30px', '-48px', '152px', '240px', 'auto', 'auto'],
                    display: 'none',
                    id: 'battery_black_blank_1',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/battery_black_blank_1.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.6', '0.6']],
                    rect: ['-30px', '-48px', '152px', '240px', 'auto', 'auto'],
                    display: 'none',
                    id: 'battery_black_blank_2',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/battery_black_blank_2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.6', '0.6']],
                    rect: ['-30px', '-48px', '152px', '240px', 'auto', 'auto'],
                    display: 'none',
                    id: 'battery_black_2',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/battery_black_2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.6', '0.6']],
                    rect: ['-30px', '-48px', '152px', '240px', 'auto', 'auto'],
                    display: 'none',
                    id: 'battery_black_1',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/battery_black_1.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.6', '0.6']],
                    rect: ['-30px', '-48px', '152px', '240px', 'auto', 'auto'],
                    display: 'none',
                    id: 'battery_pos_down',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/battery_pos_down.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.6', '0.6']],
                    rect: ['-30px', '-48px', '152px', '240px', 'auto', 'auto'],
                    display: 'block',
                    id: 'battery_pos_up2',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/battery_pos_up.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_battery_black_2}": [
                ["style", "top", '-48px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "scaleX", '0.6'],
                ["style", "left", '-34px'],
                ["style", "display", 'none']
            ],
            "${_battery_pos_down}": [
                ["style", "top", '-48px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "scaleX", '0.6'],
                ["style", "left", '-35px'],
                ["style", "display", 'none']
            ],
            "${_battery_black_blank_1}": [
                ["style", "top", '-48px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "scaleX", '0.6'],
                ["style", "left", '-35px'],
                ["style", "display", 'none']
            ],
            "${_battery_pos_up2}": [
                ["style", "top", '-48px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "scaleX", '0.6'],
                ["style", "left", '-30px'],
                ["style", "display", 'block']
            ],
            "${_battery_black_blank_2}": [
                ["style", "top", '-48px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "scaleX", '0.6'],
                ["style", "left", '-30px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '144px'],
                ["style", "width", '91px']
            ],
            "${_battery_black_1}": [
                ["style", "top", '-48px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "scaleX", '0.6'],
                ["style", "left", '-30px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 240000,
            autoPlay: false,
            labels: {
                "p1s1": 0,
                "p1s2": 2000,
                "p1s3": 3000,
                "p1s4": 4000,
                "p2s1": 5000,
                "p2s2": 6000,
                "p2s3": 7000,
                "p2s4": 8000,
                "p3s1": 9000,
                "p3s2": 10000,
                "p3s3": 11000,
                "p3s4": 12000,
                "p4s1": 13000,
                "p4s2": 14000,
                "p4s3": 15000,
                "p4s4": 16000
            },
            timeline: [
                { id: "eid1617", tween: [ "style", "${_battery_black_blank_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1642", tween: [ "style", "${_battery_black_blank_2}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid1643", tween: [ "style", "${_battery_black_blank_2}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid1645", tween: [ "style", "${_battery_black_blank_2}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid1647", tween: [ "style", "${_battery_black_blank_2}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid1624", tween: [ "style", "${_battery_black_blank_2}", "display", 'none', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid1615", tween: [ "style", "${_battery_black_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1636", tween: [ "style", "${_battery_black_2}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid1637", tween: [ "style", "${_battery_black_2}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid1639", tween: [ "style", "${_battery_black_2}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid1640", tween: [ "style", "${_battery_black_2}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0 },
                { id: "eid1622", tween: [ "style", "${_battery_black_2}", "display", 'none', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid1586", tween: [ "style", "${_battery_pos_up2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1625", tween: [ "style", "${_battery_pos_up2}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid1627", tween: [ "style", "${_battery_pos_up2}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid1629", tween: [ "style", "${_battery_pos_up2}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid1631", tween: [ "style", "${_battery_pos_up2}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid1619", tween: [ "style", "${_battery_pos_up2}", "display", 'none', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid1587", tween: [ "style", "${_battery_pos_up2}", "display", 'none', { fromValue: 'none'}], position: 120000, duration: 0 },
                { id: "eid1583", tween: [ "style", "${_battery_pos_up2}", "display", 'none', { fromValue: 'none'}], position: 180000, duration: 0 },
                { id: "eid1593", tween: [ "style", "${_battery_pos_up2}", "display", 'none', { fromValue: 'none'}], position: 240000, duration: 0 },
                { id: "eid1616", tween: [ "style", "${_battery_black_blank_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1644", tween: [ "style", "${_battery_black_blank_1}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid1646", tween: [ "style", "${_battery_black_blank_1}", "display", 'none', { fromValue: 'block'}], position: 11000, duration: 0 },
                { id: "eid1648", tween: [ "style", "${_battery_black_blank_1}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid1623", tween: [ "style", "${_battery_black_blank_1}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid1613", tween: [ "style", "${_battery_pos_down}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1626", tween: [ "style", "${_battery_pos_down}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1628", tween: [ "style", "${_battery_pos_down}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid1630", tween: [ "style", "${_battery_pos_down}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid1632", tween: [ "style", "${_battery_pos_down}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid1620", tween: [ "style", "${_battery_pos_down}", "display", 'none', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid1614", tween: [ "style", "${_battery_black_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1633", tween: [ "style", "${_battery_black_1}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid1635", tween: [ "style", "${_battery_black_1}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid1634", tween: [ "style", "${_battery_black_1}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid1638", tween: [ "style", "${_battery_black_1}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
                { id: "eid1621", tween: [ "style", "${_battery_black_1}", "display", 'none', { fromValue: 'none'}], position: 13000, duration: 0 }            ]
        }
    }
},
"bulb": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    display: 'none',
                    rect: ['-20px', '-4px', '99px', '100px', 'auto', 'auto'],
                    id: 'Schematic_Light_On2',
                    fill: ['rgba(0,0,0,0)', 'images/Schematic_Light_On.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    display: 'none',
                    rect: ['-20px', '-4px', '99px', '100px', 'auto', 'auto'],
                    id: 'Schematic_Light_Off2',
                    fill: ['rgba(0,0,0,0)', 'images/Schematic_Light_Off.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.6', '0.6']],
                    display: 'none',
                    rect: ['-52px', '23px', '290px', '163px', 'auto', 'auto'],
                    id: 'bulb_on',
                    fill: ['rgba(0,0,0,0)', 'images/bulb_on.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.6', '0.6']],
                    display: 'block',
                    rect: ['-58px', '-47px', '290px', '163px', 'auto', 'auto'],
                    id: 'bulb_off2',
                    fill: ['rgba(0,0,0,0)', 'images/bulb_off.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bulb_on}": [
                ["style", "top", '-33px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "scaleX", '0.6'],
                ["style", "left", '-58px'],
                ["style", "display", 'none']
            ],
            "${_bulb_off2}": [
                ["style", "top", '-33px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "scaleX", '0.6'],
                ["style", "left", '-58px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '98px'],
                ["style", "width", '174px']
            ],
            "${_Schematic_Light_On2}": [
                ["style", "top", '-4px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '-20px'],
                ["style", "display", 'none']
            ],
            "${_Schematic_Light_Off2}": [
                ["style", "top", '-4px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '-20px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: false,
            labels: {
                "bigoff": 0,
                "bigon": 2000,
                "smalloff": 4000,
                "smallon": 6000
            },
            timeline: [
                { id: "eid1652", tween: [ "style", "${_Schematic_Light_Off2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1662", tween: [ "style", "${_Schematic_Light_Off2}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid1656", tween: [ "style", "${_Schematic_Light_Off2}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid1651", tween: [ "style", "${_bulb_on}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1659", tween: [ "style", "${_bulb_on}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1661", tween: [ "style", "${_bulb_on}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid214", tween: [ "style", "${_bulb_off2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1658", tween: [ "style", "${_bulb_off2}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid1653", tween: [ "style", "${_Schematic_Light_On2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1657", tween: [ "style", "${_Schematic_Light_On2}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 }            ]
        }
    }
},
"next": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '1px', '75px', '25px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect',
                    stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(135,128,128,1.00)']
                },
                {
                    font: ['Verdana, Geneva, sans-serif', 12, 'rgba(249,247,247,1)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text',
                    text: 'Next',
                    align: 'center',
                    rect: ['24px', '6px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '25px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "left", '0px'],
                ["style", "width", '75px']
            ],
            "${_Text}": [
                ["style", "top", '5px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '75px']
            ],
            "${symbolSelector}": [
                ["style", "height", '25px'],
                ["style", "width", '75px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11000,
            autoPlay: true,
            labels: {
                "up": 0,
                "over": 1045,
                "down": 2044
            },
            timeline: [
                { id: "eid239", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
                { id: "eid221", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(135,128,128,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 1039, duration: 0 },
                { id: "eid237", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(88,83,83,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(88,83,83,1.00)'}], position: 2044, duration: 0 },
                { id: "eid238", tween: [ "style", "${_Text}", "top", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
                { id: "eid1709", tween: [ "style", "${_Text}", "top", '6px', { fromValue: '5px'}], position: 2036, duration: 0 },
                { id: "eid378", tween: [ "style", "${_Text}", "width", '75px', { fromValue: '75px'}], position: 0, duration: 0 },
                { id: "eid249", tween: [ "style", "${_RoundRect}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid251", tween: [ "style", "${_RoundRect}", "top", '1px', { fromValue: '0px'}], position: 2036, duration: 0 },
                { id: "eid240", tween: [ "color", "${_RoundRect}", "border-color", 'rgb(0, 0, 0)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgb(0, 0, 0)'}], position: 0, duration: 0 },
                { id: "eid241", tween: [ "color", "${_RoundRect}", "border-color", 'rgb(0, 0, 0)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgb(0, 0, 0)'}], position: 1039, duration: 0 },
                { id: "eid242", tween: [ "color", "${_RoundRect}", "border-color", 'rgb(0, 0, 0)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgb(0, 0, 0)'}], position: 2040, duration: 0 },
                { id: "eid243", tween: [ "style", "${_Text}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1708", tween: [ "style", "${_Text}", "left", '1px', { fromValue: '0px'}], position: 2036, duration: 0 },
                { id: "eid248", tween: [ "style", "${_RoundRect}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid250", tween: [ "style", "${_RoundRect}", "left", '1px', { fromValue: '0px'}], position: 2036, duration: 0 },
                { id: "eid28", tween: [ "color", "${_Text}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 }            ]
        }
    }
},
"begin": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '1px', '75px', '25px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect',
                    stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(135,128,128,1.00)']
                },
                {
                    font: ['Verdana, Geneva, sans-serif', 12, 'rgba(249,247,247,1)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text',
                    text: 'Begin',
                    align: 'center',
                    rect: ['24px', '6px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "height", '25px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '75px']
            ],
            "${_Text}": [
                ["style", "top", '6px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '75px']
            ],
            "${symbolSelector}": [
                ["style", "height", '25px'],
                ["style", "width", '75px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11000,
            autoPlay: true,
            labels: {
                "up": 0,
                "over": 1045,
                "down": 2044
            },
            timeline: [
                { id: "eid239", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
                { id: "eid221", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(135,128,128,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 1039, duration: 0 },
                { id: "eid237", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(88,83,83,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(88,83,83,1.00)'}], position: 2044, duration: 0 },
                { id: "eid28", tween: [ "color", "${_Text}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
                { id: "eid240", tween: [ "color", "${_RoundRect}", "border-color", 'rgb(0, 0, 0)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgb(0, 0, 0)'}], position: 0, duration: 0 },
                { id: "eid241", tween: [ "color", "${_RoundRect}", "border-color", 'rgb(0, 0, 0)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgb(0, 0, 0)'}], position: 1039, duration: 0 },
                { id: "eid242", tween: [ "color", "${_RoundRect}", "border-color", 'rgb(0, 0, 0)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgb(0, 0, 0)'}], position: 2040, duration: 0 },
                { id: "eid249", tween: [ "style", "${_RoundRect}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid251", tween: [ "style", "${_RoundRect}", "top", '1px', { fromValue: '0px'}], position: 2036, duration: 0 },
                { id: "eid248", tween: [ "style", "${_RoundRect}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid250", tween: [ "style", "${_RoundRect}", "left", '1px', { fromValue: '0px'}], position: 2036, duration: 0 },
                { id: "eid1812", tween: [ "style", "${_Text}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1813", tween: [ "style", "${_Text}", "left", '1px', { fromValue: '0px'}], position: 2036, duration: 0 },
                { id: "eid1808", tween: [ "style", "${_Text}", "width", '75px', { fromValue: '75px'}], position: 0, duration: 0 },
                { id: "eid1811", tween: [ "style", "${_Text}", "top", '6px', { fromValue: '6px'}], position: 0, duration: 0 },
                { id: "eid1809", tween: [ "style", "${_Text}", "top", '7px', { fromValue: '6px'}], position: 2036, duration: 0 }            ]
        }
    }
},
"glow": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'ellipse',
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'EllipseCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['-47px', '36px', '206px', '199px', 'auto', 'auto'],
                    display: 'none',
                    transform: [[], ['180'], [], ['0.55', '0.55']],
                    clip: ['rect(0px 206px 134.015625px 0px)'],
                    fill: ['rgba(233,241,14,1.00)']
                },
                {
                    rect: ['-20px', '46px', '150px', '98px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.55', '0.55']],
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'none',
                    fill: ['rgba(233,241,14,1)']
                },
                {
                    type: 'ellipse',
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['-46px', '-45px', '206px', '199px', 'auto', 'auto'],
                    display: 'block',
                    transform: [[], [], [], ['0.55', '0.55']],
                    clip: ['rect(0px 206px 134.015625px 0px)'],
                    fill: ['rgba(233,241,14,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(233,241,14,1.00)'],
                ["transform", "scaleX", '0.55'],
                ["style", "left", '-46px'],
                ["style", "width", '206px'],
                ["style", "top", '-45px'],
                ["transform", "scaleY", '0.55'],
                ["style", "height", '199px'],
                ["style", "clip", [0,206,134.015625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '190px'],
                ["style", "width", '113px']
            ],
            "${_Rectangle}": [
                ["style", "top", '46px'],
                ["transform", "scaleY", '0.55'],
                ["style", "display", 'none'],
                ["style", "height", '98px'],
                ["transform", "scaleX", '0.55'],
                ["style", "left", '-20px'],
                ["style", "width", '150px']
            ],
            "${_EllipseCopy}": [
                ["color", "background-color", 'rgba(233,241,14,1.00)'],
                ["transform", "rotateZ", '180deg'],
                ["transform", "scaleX", '0.55'],
                ["style", "left", '-47px'],
                ["style", "width", '206px'],
                ["style", "top", '36px'],
                ["transform", "scaleY", '0.55'],
                ["style", "height", '199px'],
                ["style", "clip", [0,206,134.015625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: false,
            timeline: [
                { id: "eid1841", tween: [ "style", "${_Ellipse}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1844", tween: [ "style", "${_Ellipse}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid1847", tween: [ "style", "${_Ellipse}", "display", 'none', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1843", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1845", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1848", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid1842", tween: [ "style", "${_EllipseCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1846", tween: [ "style", "${_EllipseCopy}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid1849", tween: [ "style", "${_EllipseCopy}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-153592568");
