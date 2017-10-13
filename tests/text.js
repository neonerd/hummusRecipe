const path = require('path');
const HummusRecipe = require('../lib');

describe('Text', () => {
    it('Add text', (done) => {
        const src = path.join(__dirname, 'materials/test.pdf')
        const output = path.join(__dirname, `output/Add text.pdf`);
        const recipe = new HummusRecipe(src, output);
        recipe
            .editPage(1)
            .text('Add text', 'center', 100)
            .endPage()
            .endPDF(done);
    });

    it('Add text inside textbox', (done) => {
        const src = path.join(__dirname, 'materials/test.pdf')
        const output = path.join(__dirname, `output/Add text inside textbox.pdf`);
        const recipe = new HummusRecipe(src, output);
        const textContent =
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ` +
            `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;

        recipe
            .editPage(1)
            .circle('center', 400, 10, { stroke: '#3b7721', fill: '#0e0e0e', opacity: 0.4 })
            .text(textContent, 'center', 400, {
                textBox: {
                    width: 400,
                    lineHeight: 16,
                    minHeight: 300,
                    padding: 15,
                    style: {
                        lineWidth: 5,
                        fill: '#813b00',
                        stroke: '#ff0000',
                        opacity: 0.3
                    }
                },
                font: 'Helvetica',
                color: '#813b00',
                align: 'center bottom'
            })
            .circle('center', 450, 10, { stroke: '#3b7721', fill: '#0e0e0e', opacity: 0.4 })
            .text(textContent, 'center', 450, {
                textBox: {
                    width: 400,
                    lineHeight: 30,
                    // height: 100,
                    minHeight: 300,
                    padding: 15,
                    style: {
                        lineWidth: 1,
                        stroke: '#0000ff',
                        fill: '#ffff00',
                        dash: [10, 10],
                        opacity: 0.3
                    }
                },
                font: 'Roboto',
                color: '#000000',
                align: 'right'
            })
            .circle(350, 450, 10, { stroke: '#3b7721', fill: '#0e0e0e', opacity: 0.4 })
            .text('Fix height', 350, 450, {
                textBox: {
                    width: 200,
                    lineHeight: 16,
                    height: 200,
                    padding: 15,
                    style: {
                        lineWidth: 1,
                        stroke: '#00ff00',
                        fill: '#ff0000',
                        dash: [20, 20],
                        opacity: 0.1
                    }
                },
                font: 'Roboto',
                size: 30,
                color: '#000000'
            })
            .endPage()
            .endPDF(done);
    });
});
