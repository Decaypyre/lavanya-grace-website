
interface BeforeAfterImageProps {
  beforeSrc: string;
  afterSrc: string;
  title: string;
  beforeAlt: string;
  afterAlt: string;
}

const BeforeAfterImage = ({ beforeSrc, afterSrc, title, beforeAlt, afterAlt }: BeforeAfterImageProps) => {
  return (
    <div className="before-after-container">
      <h3 className="text-xl font-serif mb-4 text-center">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src={beforeSrc} 
              alt={beforeAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center text-gray-500 mt-2">Before</p>
        </div>
        <div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src={afterSrc} 
              alt={afterAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center text-gray-500 mt-2">After</p>
        </div>
      </div>
    </div>
  );
};

const TransformationsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif mb-4">Transformations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See the amazing before and after results of our beauty treatments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <BeforeAfterImage
            title="Hair Transformation"
            beforeSrc="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhaXIlMjBiZWZvcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
            afterSrc="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhhaXIlMjBhZnRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            beforeAlt="Before Hair Treatment"
            afterAlt="After Hair Treatment"
          />
          
          <BeforeAfterImage
            title="Makeup Transformation"
            beforeSrc="https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZSUyMG5vJTIwbWFrZXVwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            afterSrc="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
            beforeAlt="Before Makeup"
            afterAlt="After Makeup"
          />
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
