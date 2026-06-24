import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import SectionHeading from "../components/ui/SectionHeading";
import PageCTA from "../components/ui/PageCTA";
import SEOHead from "../components/seo/SEOHead";
import { MotionSection } from "../components/ui/Motion";
import { getPageMeta } from "../seo/pageMeta";
import { organizationSchema, breadcrumbSchema } from "../seo/schemas";
import { blogCategories, totalBlogTopics } from "../seo/blogTopics";

const pageMeta = getPageMeta("blog");

const BlogPage = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: null },
  ];

  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ];

  return (
    <>
      <SEOHead
        title={pageMeta.title}
        description={pageMeta.description}
        keywords={pageMeta.keywords}
        canonical={pageMeta.canonical}
        jsonLd={[organizationSchema(), breadcrumbSchema(crumbs)]}
      />

      <div className="space-y-16 md:space-y-20">
        <Breadcrumb
          items={breadcrumbItems}
          title="Coir Industry Blog"
          subtitle={`${totalBlogTopics}+ expert topics on coco peat, hydroponics, export trade & sustainable agriculture.`}
        />

        <MotionSection>
          <SectionHeading
            eyebrow="Content Strategy"
            title="SEO Blog Categories & Topic Ideas"
            subtitle="Planned editorial calendar targeting coir manufacturing, export, and horticulture keywords. Articles publishing soon."
          />

          <div className="mb-8 p-4 rounded-xl bg-accent/10 border border-accent/20 text-sm text-gray-700 dark:text-gray-300">
            <BookOpen size={18} className="inline mr-2 text-accent" />
            Our blog launches with in-depth guides for B2B buyers, greenhouse operators, and
            coir importers. Subscribe via{" "}
            <Link to="/contact-us" className="text-primary font-semibold hover:underline">
              contact form
            </Link>{" "}
            for updates.
          </div>

          <div className="space-y-10">
            {blogCategories.map((cat) => (
              <div key={cat.id} id={cat.id}>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {cat.label}
                  <span className="text-sm font-normal text-gray-500">
                    ({cat.topics.length} topics)
                  </span>
                </h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {cat.topics.map((topic) => (
                    <li
                      key={topic}
                      className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-primary/5 text-sm text-gray-600 dark:text-gray-400 hover:border-primary/20 transition-colors"
                    >
                      {topic}
                      <span className="block text-xs text-accent mt-1">Coming soon</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/products" className="btn-outline">
              Browse Coir Products
              <ArrowRight size={18} />
            </Link>
          </div>
        </MotionSection>

        <PageCTA
          title="Want a topic covered first?"
          subtitle="Tell our export team which coir or coco peat subject matters most to your business."
          primaryLabel="Suggest a Topic"
        />
      </div>
    </>
  );
};

export default BlogPage;
