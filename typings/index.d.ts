import { Component } from 'react';

interface ImageSequenceProps {
    /** An array of source images. Each element of the array should be the result of a call to require(imagePath). */
    images: any[];
    /** Which index of the images array should the sequence start at. Default: 0 */
    startFrameIndex?: number;
    /** Playback speed of the image sequence. Default: 24 */
    framesPerSecond?: number;
    /** Should the sequence loop. Default: true */
    loop?: boolean;
    /** Frame to start loop. Default: 0 */
    loopFrom?: number;
    /** Frame to start loop. Default: images.length */
    loopTo?: number;
    /** make it look fancy */
    style?: React.CSSProperties
}

declare class ImageSequence extends Component<ImageSequenceProps> {
}

export default ImageSequence;
