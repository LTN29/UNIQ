import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { footerNavigation } from '@/config/navigation';
export function SiteFooter() {
  const { t } = useTranslation();

  return (
    <footer className="bg-graphite text-silver py-20 border-t border-silver/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <a href="#top" className="inline-block mb-6 transition-opacity hover:opacity-80">
              <span className="text-3xl font-display font-bold text-pure-white tracking-tight">UNIQ</span>
            </a>
            <p className="text-silver/70 max-w-sm text-sm leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          {footerNavigation.map((group) => (
            <div key={group.title}>
              <h4 className="text-pure-white font-semibold mb-6 uppercase tracking-widest text-xs">
                {t(group.title)}
              </h4>
              <ul className="flex flex-col gap-4">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-silver/70 hover:text-brand-red text-sm transition-colors group inline-flex items-center gap-2"
                    >
                      {t(link.label)}
                      <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-silver/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-silver/50">
          <p>{t('footer.copyright')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-pure-white transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="hover:text-pure-white transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
