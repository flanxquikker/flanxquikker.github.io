const BOX_BG_COLOR = ["#FFF", "#242424"];
const BOX_HEIGHT = ["80vh", "20vh"];
const BOX_ID = ["c1", "c2"];

let wrapper = {
    html: {
        elem: "div",
        id: "wrapper"
    },
    css: {
        id: "wrapper",
        display: block,
        justifyContent: center,
        alignItems: center,
        width: inherit,
        height: inherit,
    }
};

let renderBox = () => {
    loop(0, BOX_ID.length, () => {
        out({
            html: {
                select: "wrapper",
                elem: "div",
                id: BOX_ID[r]
            },
            css: {
                id: BOX_ID[r],
                display: grid,
                width: inherit,
                height: BOX_HEIGHT[r],
                backgroundColor: BOX_BG_COLOR[r]
            }
        });
    });
};

let renderMessage = () => {
    out({
        html: {
            select: BOX_ID[0],
            elem: "p",
            text: "This website is currently work on progress.",
            id: "message"
        },
        css: {
            id: "message",
            width: "90vw",
            fontFamily: "Poppins Bold",
            fontSize: "36px",
            textAlign: center,
            color: "#FE2424"
        }
    });
};

let renderLogo = () => {
    out({
        html: {
            select: BOX_ID[1],
            elem: "img",
            src: "main/asset/icon/fq.png",
            id: "logo"
        },
        css: {
            id: "logo",
            width: "86px",
            height: "86px"
        }
    });
};

render([wrapper], root);
renderBox();
renderMessage();
renderLogo();