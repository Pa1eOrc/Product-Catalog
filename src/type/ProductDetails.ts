export type ProductDeatails = {
  id: string,
  capacityAvailable: string[],
  colorsAvailable: string[],
  color: string,
  capacity: string,
  namespaceId: string,
  images: string[],
  description: {
    title: string;
    text: string[];
  }[];
  resolution: string,
  processor: string,
  camera: string,
  zoom: string,
  cell: string[],
};
