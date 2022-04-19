import dynamic from "next/dynamic";
import Link from "next/link";
import { SliceZone } from "@prismicio/react";

import { Layout } from "../components/Layout";

const components = {
  cover: dynamic(() => import("../slices/CoverLazy")),
  features: dynamic(() => import("../slices/FeaturesLazy")),
  numbers: dynamic(() => import("../slices/NumbersLazy")),
};

const DynamicPage = () => {
  return (
    <Layout>
      <div className="flex gap-3 bg-yellow-600 p-4 text-sm font-bold text-white">
        <span>
          This page uses 😴 lazy components with <code>next/dynamic</code>
        </span>
        <Link href="/">
          <a className="font-normal text-white/60">
            See the <code>React.lazy</code> version &rarr;
          </a>
        </Link>
        <span className="font-normal text-white/30">or</span>
        <Link href="/eager">
          <a className="font-normal text-white/60">
            See the eager version &rarr;
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

export default DynamicPage;
