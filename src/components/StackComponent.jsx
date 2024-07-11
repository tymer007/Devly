// CommunityStackCard.jsx
import React from 'react';
import CommunityStacks from './CommunityStacks';

function CommunityStackCard({ title, description, image, isReversed }) {
  return (
    <>
       < CommunityStacks
        title={title}
        description={description}
        image={image}
        isReversed={isReversed}
      />
    </>
   
    
  );
}

export default CommunityStackCard;
