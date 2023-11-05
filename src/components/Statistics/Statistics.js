import { StatSection, StatList, ListItem } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <StatSection>
                { title && <h2>{title}</h2>}
            <StatList>
                {
                    stats.map(stat => {
                        return (
                            <ListItem key={stat.id}>
                                <span>{stat.label}</span>
                                <span>{stat.percentage}%</span>
                            </ListItem>
                        );
                    })}
            </StatList>
        </StatSection>
        );
};