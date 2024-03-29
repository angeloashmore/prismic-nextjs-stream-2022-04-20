import Link from "next/link";
import { SliceZone } from "@prismicio/react";

import { Layout } from "../components/Layout";
import Cover from "../slices/Cover";
import Features from "../slices/Features";
import Numbers from "../slices/Numbers";

const components = {
  cover: Cover,
  features: Features,
  numbers: Numbers,
};

const IndexPage = () => {
  return (
    <Layout>
      <div className="flex gap-3 bg-red-800 p-4 text-sm font-bold text-white">
        <span>This page uses 👹 eager components</span>
        <Link href="/">
          <a className="font-normal text-white/60">
            See the <code>React.lazy</code> version &rarr;
          </a>
        </Link>
        <span className="font-normal text-white/30">or</span>
        <Link href="/dynamic">
          <a className="font-normal text-white/60">
            See the <code>next/dynamic</code> version &rarr;
          </a>
        </Link>
      </div>
      <SliceZone
        slices={[
          { slice_type: "cover" },
          { slice_type: "features" },
          { slice_type: "numbers" },
        ]}
        components={components}
      />
    </Layout>
  );
};

export default IndexPage;
