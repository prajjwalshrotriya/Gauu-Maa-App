import React from 'react'
import "./products.css"
import { TypeAnimation } from 'react-type-animation';

const Products = () => {
  return (
    <>
      <section id="products">
        <div className="top-text">
        <h2>Our Products</h2>
        <p>< TypeAnimation sequence={["Premium Quality", 1000, "Best In Prices", 1000, "Good For Health", 1000, "100% Purity", 1000, "Desi Indian Cow Products", 1000]} speed={50} repeat={Infinity} className='text-ani' /></p>
        </div>
        <div className="pcontainer">
          <div className="pro">
            <img src="./img/butter.jpg" alt="" />
            <div className="pdiscription">
              <p><span>Product Name : </span>Gauu Maa Butter</p>
              <p><span>composition : </span>Milk Fat Min : 80% Moisture Mix : 16% Salt: NIL Curd, Max : 1%</p>
              <details id='nutri'>
                <summary>Nutritional Information</summary>
                Amount per 100 g Energy, kcal 740 Total Fat, g 82 Saturated fat, g 52 Total Carbohydrate, g 0 Added Sugar, g 0 Protein, g 0.6 Vitamin A, mcg 666
              </details>
              <p id='price'>200gm = <i class="fa-solid fa-indian-rupee-sign"></i> 200</p>
            </div>
            <a href="#">Buy Now</a>
          </div>
          <div className="pro">
            <img src="./img/milk.jpg" alt="" />
            <div className="pdiscription">
              <p><span>Product Name : </span>Gauu Maa Milk</p>
              <p><span>composition : </span>FAT (%) 4.0 min SNF (%) 9.0 min</p>
              <details id='nutri'>
                <summary>Nutritional Information</summary>
                Energy, kcal 69 Total Fat, g 4.0 Saturated fat, g 2.1 Trans fat, g 0.0 Total Carbohydrate, g 4.9 Added Sugar, g 0.0 Protein, g 3.1 Calcium, mg 116 *Approx. values</details>
              <p id='price'>1 Litre = <i class="fa-solid fa-indian-rupee-sign"></i> 50</p>
            </div>
            <a href="#">Buy Now</a>
          </div>
          <div className="pro">
            <img src="./img/ghee.jpg" alt="" />
            <div className="pdiscription">
              <p><span>Product Name : </span>Gauu Maa Ghee</p>
              <p><span>composition : </span>% Milk FAT Min, 99.7% % Moisture Max, 0.3%</p>
              <details id='nutri'>
                <summary>Nutritional Information</summary>
                Sodium,mg, 0.00 ; Added sugar, g, 0.00 ; Total carbohydrate,g, 0.00 ; Protein,g, 0.00 ; Vitamin A,mcg, 78.00 ; Calorie Goal1100 Cal. 900/2000Cal ; Fat0 g. 100/67g ; Sodium2300 mg. --/2300mg ; Cholesterol0 mg. 300/300mg
              </details>
              <p id='price'>1 Liter = <i class="fa-solid fa-indian-rupee-sign"></i> 900</p>
            </div>
            <a href="#">Buy Now</a>
          </div>
          <div className="pro">
            <img src="./img/chesee.jpg" alt="" />
            <div className="pdiscription">
              <p><span>Product Name : </span>Gauu Maa Cheese</p>
              <p><span>composition : </span>per 1 cube (25g) - Calories: 80kcal | Fat: 6.50g | Carbs: 0.30g | Prot: 5.00g </p>
              <details id='nutri'>
                <summary>Nutritional Information</summary>
                100 g. Calories: 320. Carbs: 1.5g. Fat: 26g ; Cheese. Amul, 100 g. Calories: 320. Carbs: 1.5g. Fat: 26g ; Cheese. Amul, 1 slice. Calories: 62.
              </details>
              <p id='price'>100gm = <i class="fa-solid fa-indian-rupee-sign"></i> 70</p>
            </div>
            <a href="#">Buy Now</a>
          </div>
          <div className="pro">
            <img src="./img/dahi.jpg" alt="" />
            <div className="pdiscription">
              <p><span>Product Name : </span>Gauu Maa Dahi</p>
              <p><span>composition : </span>Pasteurised Toned Milk, Milk Solids and Active Culture.</p>
              <details id='nutri'>
                <summary>Nutritional Information</summary>
                Per 100g (approximate values): Energy: 57.2 Kcal Total Fat: 3.1g (Saturated Fat: 2.0g, Trans Fat: 0g) Total Carbohydrate: 3.8g Added Sugar: 0.0g Protein: 3.5g Calcium: 120mg
              </details>
              <p id='price'>200gm = <i class="fa-solid fa-indian-rupee-sign"></i> 15</p>
            </div>
            <a href="#">Buy Now</a>
          </div>
          <div className="pro">
            <img src="./img/panchamrit.jpg" alt="" />
            <div className="pdiscription">
              <p><span>Product Name : </span>Gauu Maa Panchamrit</p>
              <p><span>composition : </span>Equal quantity of milk,ghee,dahi,shugar,honey.</p>
              <details id='nutri'>
                <summary>Nutritional Information</summary>
                 Amount per 100 g Energy, kcal 740 Total Fat, g 82 Saturated fat, g 52 Total Carbohydrate, g 0 Added Sugar, g 0 Protein, g 0.6 Vitamin A, mcg 666.
              </details>
              <p id='price'>200gm = <i class="fa-solid fa-indian-rupee-sign"></i> 400</p>
            </div>
            <a href="#">Buy Now</a>
          </div>
          <div className="pro">
            <img src="./img/paneer.jpg" alt="" />
            <div className="pdiscription">
              <p><span>Product Name : </span>Gauu Maa Paneer</p>
              <p><span>composition : </span>Milk Solids, Citric Acid Allergen Information: Contains Milk</p>
              <details id='nutri'>
                <summary>Nutritional Information</summary>
                Amount Per 100gEnergy: 314 kcal Total FAT: 25g Saturated FAT: 15 g Trans Fat: 0 g Cholesterol: 65 mg Carbohydrate: 4.5 g Total Sugar 4.5 g Added Sugar: 0 g Protein: 20 gSodium: 22 mg Calcium: 480mg
              </details>
              <p id='price'>200gm = <i class="fa-solid fa-indian-rupee-sign"></i> 100</p>
            </div>
            <a href="#">Buy Now</a>
          </div>
          <div className="pro">
            <img src="./img/cream.jpeg" alt="" />
            <div className="pdiscription">
              <p><span>Product Name : </span>Gauu Maa Cream</p>
              <p><span>composition : </span>Milk FAT: Min 25%, SNF: 6.8%, Moisture:68.2%</p>
              <details id='nutri'>
                <summary>Nutritional Information</summary>
                 Amount per 100 g Energy, kcal 740 Total Fat, g 82 Saturated fat, g 52 Total Carbohydrate, g 0 Added Sugar, g 0 Protein, g 0.6 Vitamin A, mcg 666
              </details>
              <p id='price'>200ml = <i class="fa-solid fa-indian-rupee-sign"></i> 80</p>
            </div>
            <a href="#">Buy Now</a>
          </div>
          <div className="pro">
            <img src="./img/gomutra.jpg" alt="" />
            <div className="pdiscription">
              <p><span>Product Name : </span>Gauu Maa Gomutra</p>
              <p><span>composition : </span>Pure Cow urine</p>
              <details id='nutri'>
                <summary>Health benefits</summary>
                Various researches have proved that cow urine has antioxidant properties, thus it helps in neutralizing and reducing the stress. Cow urine, the major constituent of cow urine therapy effectively repairs the damaged DNA, hence makes the therapy an effective anti-cancer therapy.
              </details>
              <p id='price'>200gm = <i class="fa-solid fa-indian-rupee-sign"></i> 50</p>
            </div>
            <a href="#">Buy Now</a>
          </div>
          <div className="pro">
            <img src="./img/dunk.jpg" alt="" />
            <div className="pdiscription">
              <p><span>Product Name : </span>Gauu Maa Butter</p>
              <p><span>composition : </span>Pure cow donk</p>
              <details id='nutri'>
                <summary>Information</summary>
                It can enhance soil fertility, improve the quality of earthworms, and promote crop health by acting as an organic fertilizer. Additionally, cow dung and cow urine are excellent sources of energy to generate biogas and electricity
              </details>
              <p id='price'>10pcs = <i class="fa-solid fa-indian-rupee-sign"></i> 50</p>
            </div>
            <a href="#">Buy Now</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products






 
