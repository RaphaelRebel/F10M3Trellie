import Activity from "../Activity/Activity";
import Input from "../Input/Input"
//css
import "./Trellie.css"

const Trellie = ({ trellie, newInput, id}) => {

      let listItemsToBeRendered = trellie.activities.map(object => {
            return (
                  <Activity key={object.id} activity={object} />
            );
      })

      return (
            <article className="trellie">
                  <header className="trellie__header">
                        <h2 className="trellie__heading">{trellie.title || "Placeholder"}</h2>
                        <div className="trellie__headerWrapper">
                              <div className="trellie__number">{trellie.activities.length || "?"}</div>
                              <button className="trellie__edit">...</button>
                        </div>
                  </header>
                  <section className="trellie__section">
                        {listItemsToBeRendered}
                  </section>
                  <Input id={id} />
            </article>
      )
}

export default Trellie