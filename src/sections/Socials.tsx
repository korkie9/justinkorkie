import { GitHub, Linkedin } from "react-feather";
import Link from 'next/link'

const Socials: React.FC = () => {

  return (
    <div className="flex flex-row gap-8">
      <Link href="https://za.linkedin.com/in/justin-korkie-513900192?original_referer=https%3A%2F%2Fwww.google.com%2F">
        <Linkedin />
      </Link>
      <Link href="https://github.com/korkie9">
        <GitHub />
      </Link>
      <Link href="https://chessa.co.za/ratingsdatabase/playerpage.aspx?cid=198016272">
        <p>♟️</p>
      </Link>
    </div>
  );
};

export default Socials;
