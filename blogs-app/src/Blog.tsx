export interface IBlog {
  id: string;
  title: string;
  summary: string;
}

export const Blog: React.FC<IBlog> = ({ id, title, summary }) => {

  return <div
    style={{
      display: "flex",
      flexDirection: 'column',
      flexWrap: 'wrap',
      border: '1px solid lightgrey',
      padding: '0.5rem',
      marginBottom: '0.5rem',
      width: '30%'
    }}
  >
    <h2>{title}</h2>
    <small>{id}</small>
    <p>{summary}</p>
  </div>
}
