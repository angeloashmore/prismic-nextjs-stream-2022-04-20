import * as React from "react";
import Link from "next/link";
import { SliceZone } from "@prismicio/react";

import { Layout } from "../components/Layout";

const components = {
  cover: React.lazy(() => import("../slices/CoverLazy")),
  features: React.lazy(() => import("../slices/FeaturesLazy")),
  numbers: React.lazy(() => import("../slices/NumbersLazy")),
};

const IndexPage = () => {
  return (
    <Layout>
      <div className="flex gap-3 bg-green-800 p-4 text-sm font-bold text-white">
        <span>
          This page uses 😴 lazy components with <code>React.lazy</code>
        </span>
        <Link href="/dynamic">
          <a className="font-normal text-white/60">
            See the <code>next/dynamic</code> version &rarr;
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

export default IndexPage;
