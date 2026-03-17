export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  orientation: 'horizontal' | 'vertical' | 'square';
  width: number;
  height: number;
}
