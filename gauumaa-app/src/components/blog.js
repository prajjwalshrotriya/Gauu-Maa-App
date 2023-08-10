import React, { useState } from 'react'
import "./blog.css"

const paragraphStyles={
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
}

const Blog = () => {

  const [isOpen,setIsOpen]=useState(false)
  const [fIsOpen,setFIsOpen]=useState(false)
  const [sIsOpen,setSIsOpen]=useState(false)
  const [tIsOpen,setTIsOpen]=useState(false)
  return (
    <>
      <section id='blog'>
        <div className="blog-box">
            <div className="blog-img">
                <img src="./img/blog1.jpg" alt="" />
            </div>
            <div className="blog-details">
                <h4>Health Benefits of Desi Cow Ghee</h4>
                <p style={isOpen? null: paragraphStyles}>Cow ghee has got several health benefits. The desi cow ghee has enhanced levels of nutritional and other benefits associated with the cow ghee in general. The A2 protein present in the desi cow ghee makes it more easily digestible and also facilitates the revitalization of the digestive system and secretion of digestive enzymes. This, in turn, tones the metabolism and brings enhancement of the overall energy level of the body. It improves the eyesight and acts as a skin-care agent besides toning the bone, muscles, and tendons of the body. Desi cow ghee is excellent nutrition for a healthy pregnancy and improves the cognitive features of the developing fetus in its real life. Desi cow ghee is rich in good fat and hence useful in heart care.</p>
                <button onClick={()=> setIsOpen(!isOpen)}>{isOpen ? "read less...":"read more..."}</button>
            </div>
            <h1>02/05/23</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src="./img/blog3.jpg" alt="" />
            </div>
            <div className="blog-details">
                <h4>Why is Desi cow milk superior?</h4>
                <p style={fIsOpen? null: paragraphStyles}>The desi cow milk is naturally enriched with many nutritional factors modulating the physical and mental health of growing children, adults and taking care of the cognitive and physical abilities of the aged.  Milk produced by desi cows has been proved to contain Omega 3 Fatty Acids and Conjugated Linoleic Acid (CLA), contributing to the long-term health of human beings. Desi cow milk is also equipped with other highly nutritious components like Lactoperoxidase, Lactoferrin, Polysaccharides, Enzymes, Vitamin B12 Binding Protein, Antibodies, Mucins, Hormones and Vital Micronutrients. Modern society is aware of these facts and hence more and more people are opting desi cow milk by choice. This trend has a positive impact on desi cow milk price.</p>
                <button onClick={()=> setFIsOpen(!fIsOpen)}>{fIsOpen ? "read less...":"read more..."}</button>
            </div>
            <h1>05/06/23</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src="./img/blog2.jpg" alt="" />
            </div>
            <div className="blog-details">
                <h4>Sahiwal Cow And Gir Cow</h4>
                <p style={sIsOpen? null: paragraphStyles}>Sahiwal cows has its origin at Sahiwal in the Montgomery district of Punjab in Pakistan while the Gir cow is a native of Sourashtra region of Gujarat bordering the Gir forests.  Both of these breeds are popular dairy breeds and extensively used for breeding purpose in India as well as overseas. Sahiwal-cows have a brownish red coat color with shades of red to greyish red. Some of them bear white patches, on the neck and the underline. The Gir cows have shining red body fur with scattered white spots. The Sahiwal-cows have short horns, large udders, and medium-sized dewlap. Gir cows are good looking with a wide forehead, drowsy eyes, and large pendulous ears.</p>
                <button onClick={()=> setSIsOpen(!sIsOpen)}>{sIsOpen ? "read less...":"read more..."}</button>
            </div>
            <h1>15/07/23</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src="./img/blog4.jpg" alt="" />
            </div>
            <div className="blog-details">
                <h4>Gau Daan Puja</h4>
                <p style={tIsOpen? null: paragraphStyles}>The word “Daan” refers to gifting. Daan is intricately woven with the Hindu tradition and is performed with utmost devotion and belief to attain different goals, which may vary from person to person and context. The concept of Daan is comparable to  Newton’s third law, “To every action, there is an equal and opposite reaction”. Similarly, there is a saying that “What Goes Around, Comes Around” indicating the more one gives, the more it comes back to one. It is projected that Gau daan is the biggest Daan among all Daans. It is believed that Gau Daan along with daan of gold, silver, emeralds, milk, food grains and land is known as Mahadaan.</p>
                <button onClick={()=> setTIsOpen(!tIsOpen)}>{tIsOpen ? "read less...":"read more..."}</button>
            </div>
            <h1>06/08/23</h1>
        </div>
      </section>
    </>
  )
}

export default Blog
