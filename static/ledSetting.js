//width : led的宽度
//height : led的高度
// const 
let LedSize = {
    width: 256,
    height: 160
}

//默认的 离线播放列表
const DefaultPlayList = [
    {
        "schedule_id": "sch_1",
        "delay": 10,
        "order": 1,
        "level": "normal",
        "begin_time": "00:00:00",
        "end_time": "23:59:59",
        "type": "text",
        "url": "携手进步\n合作共赢",
        "color": "#00FF00",
        "back_color": "#000000",
        "font_size": "50",//50
        "width": "256",
        "height": "160"
    },
    {
        "schedule_id": "sch_2",
        "delay": 10,
        "order": 2,
        "level": "normal",
        "begin_time": "00:00:00",
        "end_time": "23:59:59",
        "type": "text",
        "url": "谨慎驾驶\n注意安全",
        "color": "#FFFF00",
        "back_color": "#000000",
        "font_size": "50",
        "width": "256",
        "height": "160"
    }
    // ,
    // {
    //     "schedule_id": "sch_3",
    //     "delay": 40,
    //     "order": 3,
    //     "level": "normal",
    //     "begin_time": "00:00:00",
    //     "end_time": "23:59:59",
    //     "type": "picture",
    //     "url": require("/static/1.png"),
    //     "color": "#FFFF00",
    //     "back_color": "#000000",
    //     "font_size": "50",
    //     "width": "768",
    //     "height": "512"
    // }
]

function getDefaultList() {
    return DefaultPlayList
}

export {
    getDefaultList, LedSize
}