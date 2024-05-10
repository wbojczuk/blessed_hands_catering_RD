import styles from './menu.module.css';

export default function Menu(){
return (
 <div className={styles.menu}>
    <h3 className={styles.custom}>Custom menus are available upon request free of charge</h3>

    <div className={styles.menuSection}>
        <h2 className={styles.title}>Appetizers & Sides</h2>
        <div className={styles.icons}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#FFD063" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#AF3CC2" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#FFD063" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
        </div>
        <div className={styles.content}>
            <div className={styles.item}>Crab stuffed mushrooms </div>
            <div className={styles.item}>Fresh salmon croquette patties</div>
            <div className={styles.item}>Cheese Trays</div>

            <div className={styles.item}>Fruit and cheese trays</div>
            <div className={styles.item}>Vegetable trays</div>
            <div className={styles.item}>Charcuterie tray</div>

            <div className={styles.item}>Bacon avocado bites</div>
            <div className={styles.item}>Bruschetta</div>
            <div className={styles.item}>Deviled eggs</div>

            <div className={styles.item}>Seven layer dip</div>
            <div className={styles.item}>Sliders chicken</div>
            <div className={styles.item}>chopped beef sliders</div>

            <div className={styles.item}>spinach artichoke dip</div>
            <div className={styles.item}>triple hummus platter</div>
            <div className={styles.item}>stuffed mushrooms</div>

            <div className={styles.item}>veggie stuffed mushrooms</div>
        </div>
    </div>

    <div className={styles.menuSection}>
        <h2 className={styles.title}>Soups</h2>
        <div className={styles.icons}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#FFD063" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#AF3CC2" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#FFD063" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
        </div>
        <div className={styles.content}>
            <div className={styles.item}>Chili</div>
            <div className={styles.item}>chicken noodle</div>
            <div className={styles.item}>cabbage soup</div>

            <div className={styles.item}>potato soup</div>
            <div className={styles.item}>broccoli and cheese soup</div>
            <div className={styles.item}>ham and beans</div>
        </div>
    </div>

    <div className={styles.menuSection}>
        <h2 className={styles.title}>Breads</h2>
        <div className={styles.icons}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#FFD063" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#AF3CC2" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#FFD063" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
        </div>
        <div className={styles.content}>
            <div className={styles.item}>Dinner rolls</div>
            <div className={styles.item}>Texas toast</div>
            <div className={styles.item}>cornbread</div>
        </div>
    </div>

    <div className={styles.menuSection}>
        <h2 className={styles.title}>Meats</h2>
        <div className={styles.icons}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#FFD063" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#AF3CC2" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#FFD063" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
        </div>
        <div className={styles.content}>
            <div className={styles.item}>Smoked pork loin</div>
            <div className={styles.item}>pork loin</div>
            <div className={styles.item}>pork loin with apple chutney</div>

            <div className={styles.item}>ham</div>
            <div className={styles.item}>pepper roasted chicken</div>
            <div className={styles.item}>Southern fried chicken wings</div>
            <div className={styles.item}>brisket</div>

            <div className={styles.item}>pulled pork</div>
            <div className={styles.item}>meatloaf</div>
            <div className={styles.item}>smoked chicken</div>

            <div className={styles.item}>oxtails</div>
            <div className={styles.item}>beef tips</div>
            <div className={styles.item}>roast beef</div>

            <div className={styles.item}>lamb chops</div>
            <div className={styles.item}>pork chops</div>
            <div className={styles.item}>grilled chicken</div>

            <div className={styles.item}>taco beef</div>
            <div className={styles.item}>grilled salmon</div>
            <div className={styles.item}>tequila lime chicken</div>

            <div className={styles.item}>lemon caper chicken</div>
            <div className={styles.item}>steak</div>
        </div>
    </div>


    <div className={styles.menuSection}>
        <h2 className={styles.title}>Sides</h2>
        <div className={styles.icons}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#FFD063" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#AF3CC2" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#FFD063" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
        </div>
        <div className={styles.content}>
            <div className={styles.item}>Southern cabbage</div>
            <div className={styles.item}>macaroni and cheese</div>
            <div className={styles.item}>mashed potatoes and gravy</div>

            <div className={styles.item}>vegetable melody</div>
            <div className={styles.item}>baked potatoes</div>
            <div className={styles.item}>broccoli</div>

            <div className={styles.item}>corn</div>
            <div className={styles.item}>rice</div>
            <div className={styles.item}>green beans</div>

            <div className={styles.item}>coleslaw</div>
            <div className={styles.item}>corn on the cob</div>
            <div className={styles.item}>peas</div>

            <div className={styles.item}>black beans and corn</div>
            <div className={styles.item}>refried beans</div>
            <div className={styles.item}>baked beans</div>
            
        </div>
    </div>


    <div className={styles.menuSection}>
        <h2 className={styles.title}>Taco Bar</h2>
        <div className={styles.icons}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#FFD063" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#AF3CC2" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#FFD063" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
        </div>
        <div className={styles.content}>

            <div className={styles.item}>Ground Taco beef</div>
            <div className={styles.item}>Pulled chicken</div>
            <div className={styles.item}>Carne asada</div>

            <div className={styles.item}>Pork</div>
            <div className={styles.item}>Nacho cheese</div>
            <div className={styles.item}>shredded cheese</div>

            <div className={styles.item}>sour cream</div>
            <div className={styles.item}>lettuce</div>
            <div className={styles.item}>tomatoes</div>

            <div className={styles.item}>jalapenos</div>
            <div className={styles.item}>guacamole at an extra charge</div>

            <div className={styles.item}>hard shell tacos</div>
            <div className={styles.item}>soft shell tacos</div>
            <div className={styles.item}>corn tacos</div>

            <div className={styles.item}>Cinnamon chips</div>
            
        </div>
    </div>


    <div className={styles.menuSection}>
        <h2 className={styles.title}>Pasta Bar</h2>
        <div className={styles.icons}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#FFD063" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#AF3CC2" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#FFD063" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
        </div>
        <div className={styles.content}>

            <div className={styles.item}>Chicken alfredo</div>
            <div className={styles.item}>Mac and cheese</div>
            <div className={styles.item}>pasta salad</div>

            <div className={styles.item}>spaghetti and meatballs</div>
            <div className={styles.item}>ravioli cheese or beef</div>
            <div className={styles.item}>Ziti pasta</div>

            <div className={styles.item}>tortellini pasta</div>
            <div className={styles.item}>carbonara pasta</div>
            <div className={styles.item}>lasagna</div>

            <div className={styles.item}>vegetable lasagna</div>
            <div className={styles.item}>steakhouse pasta</div>
            <div className={styles.item}>chicken tetrazzini</div>
            
        </div>
    </div>


    <div className={styles.menuSection}>
        <h2 className={styles.title}>Salads</h2>
        <div className={styles.icons}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#FFD063" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#AF3CC2" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#FFD063" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
        </div>
        <div className={styles.content}>

            <div className={styles.item}>caesar salad</div>
            <div className={styles.item}>chicken salad</div>
            <div className={styles.item}>garden salad</div>

            <div className={styles.item}>Mixed Berry salad</div>
            <div className={styles.item}>kale cranberry pecan salad</div>
            <div className={styles.item}>triple BLT salad</div>

            <div className={styles.item}>Cobb salad</div>
            <div className={styles.item}>Chef salad</div>
            
        </div>
    </div>


    <div className={styles.menuSection}>
        <h2 className={styles.title}>Desserts</h2>
        <div className={styles.icons}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#FFD063" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#AF3CC2" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#FFD063" d="M4 1.5a.5.5 0 0 0-1 0v3a2.5 2.5 0 0 0 2 2.45v7.55a.5.5 0 0 0 1 0V6.95A2.5 2.5 0 0 0 8 4.5v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1 1.415V1.5a.5.5 0 0 0-1 0v4.415A1.5 1.5 0 0 1 4 4.5zm7 13V8H9.5a.5.5 0 0 1-.5-.5v-4c0-.663.326-1.283.771-1.729C10.217 1.326 10.837 1 11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0"></path></svg>
        </div>
        <div className={styles.content}>

            <div className={styles.item}>Lemon cake</div>
            <div className={styles.item}>chocolate cake</div>
            <div className={styles.item}>german chocolate cake</div>

            <div className={styles.item}>white cake</div>
            <div className={styles.item}>pistachio cake</div>
            <div className={styles.item}>lemon pound cake</div>

            <div className={styles.item}>yellow cake chocolate frosting</div>
            <div className={styles.item}>White chocolate cranberry cookies</div>
            <div className={styles.item}>Chocolate chip cookies</div>

            <div className={styles.item}>Peanut butter cookies</div>
            <div className={styles.item}>Peanut butter chocolate chip cookies</div>
            <div className={styles.item}>Oatmeal raisin cookies</div>

            <div className={styles.item}>Caramel brownies</div>
            <div className={styles.item}>Peanut butter brownies</div>
            <div className={styles.item}>Brownies</div>
            
        </div>
    </div>

    <img src="/img/menu.webp" alt="image of food" className="bg-img" />
    <div style={{backgroundColor: "rgba(255,255,255,0.95)"}} className="shader"></div>
 </div>
)};