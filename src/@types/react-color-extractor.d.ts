declare module 'react-color-extractor' {
    import * as React from 'react';
  
    interface ColorExtractorProps {
      src: string;
      getColors: (colors: string[]) => void;
    }
  
    export class ColorExtractor extends React.Component<ColorExtractorProps> {}
  }