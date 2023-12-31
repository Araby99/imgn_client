/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        spacing: {
            0: "0",
            1: "0.25rem",
            2: "0.5rem",
            3: "0.75rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem",
            12: "3rem",
            14: "3.5rem",
            16: "4rem",
            20: "5rem",
            22: "5.5rem",
            24: "6rem",
            26: "6.5rem",
            28: "7rem",
            30: "7.5rem",
            32: "8rem",
            34: "8.5rem",
            36: "9rem",
            38: "9.5rem",
            40: "10rem",
            44: "11rem",
            48: "12rem",
            52: "13rem",
            56: "14rem",
            60: "15rem",
            64: "16rem",
            68: "17rem",
            72: "18rem",
            76: "19rem",
            80: "20rem",
            88: "22rem",
            96: "24rem",
            104: "26rem",
            110: "28rem",
            118: "30rem",
            126: "32rem",
            132: "34rem",
            140: "36rem",
        },
        extend: {
            colors: {
                black: "#12151E",
                "imgn-purple": "#511752",
            },
            skew: {
                20: "20deg",
                n20: "-20deg",
            },
            scale: {
                130: "1.3",
                200: "2",
            },
        },
    },
    plugins: [],
}
