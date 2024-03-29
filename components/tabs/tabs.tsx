import styles from './tabs.module.css';

/* eslint-disable-next-line */
export interface TabsProps {}

export function Tabs(props: TabsProps) {
  return (
    <div className="container-fluid bg-white d-flex justify-content-center align-items-center pt-4 pb-2 m-0 fs-5 text-dark mb-4">
      <TabItem href="/" title="Agriculture & Commodities" selected={true} />
      <TabItem href="/proculers" title="Farmers & Proculers" selected={false} />
    </div>
  );
}

interface TabItemProps {
  href: string;
  title: string;
  selected: boolean;
}

const TabItem: React.FunctionComponent<TabItemProps> = ({ href, title, selected }) => {
  return (
    <div className="d-flex flex-column align-items-center me-4">
      <div className="pt-2">
        <a className={styles.tabsStyle} href={href}>
          {title}
        </a>
      </div>
      <div style={{ height: '2px' }} className={`w-50 ${selected ? 'bg-dark' : 'bg-white'} rounded-pill`}></div>
    </div>
  );
};

export default Tabs;
