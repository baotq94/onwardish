const { visit } = require('unist-util-visit');
const sizeOf = require('image-size');
const fs = require('fs');

module.exports = function remarkImgToJsx() {
    return (tree) => {
        visit(
            tree,
            (node) =>
                node.type === 'paragraph' &&
                node.children.some((n) => n.type === 'image'),
            (node) => {
                const imageNode = node.children.find((n) => n.type === 'image');

                if (fs.existsSync(`${process.cwd()}/public${imageNode.url}`)) {
                    const dimensions = sizeOf(
                        `${process.cwd()}/public${imageNode.url}`,
                    );

                    imageNode.type = 'mdxJsxFlowElement';
                    imageNode.name = 'Image';
                    imageNode.attributes = [
                        {
                            type: 'mdxJsxAttribute',
                            name: 'alt',
                            value: imageNode.alt,
                        },
                        {
                            type: 'mdxJsxAttribute',
                            name: 'src',
                            value: imageNode.url,
                        },
                        {
                            type: 'mdxJsxAttribute',
                            name: 'width',
                            value: dimensions.width,
                        },
                        {
                            type: 'mdxJsxAttribute',
                            name: 'height',
                            value: dimensions.height,
                        },
                    ];

                    node.type = 'div';
                    node.children = [imageNode];
                }
            },
        );
    };
};
