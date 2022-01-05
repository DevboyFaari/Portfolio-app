    import "./PortfolioList.scss";

    export default function PortfolioList({ title, active, setSelected }) {
        return (
            <li className={active ? "portfolioList active" : "portfolioList"}>
                {title}
            </li>
        )
    }
