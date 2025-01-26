"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { team } from "@/data/team";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function TeamSection() {
  return (
    <section className="container space-y-20 px-4 py-16 mx-auto">
      {team.map((category) => (
        <div key={category.category} className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-zinc-900">
              {category.category}
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-tbre-blue to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {category.members
              .sort((a, b) => {
                if (a.lead && !b.lead) return -1;
                if (!a.lead && b.lead) return 1;
                if (a.important && !b.important) return -1;
                if (!a.important && b.important) return 1;
                if (a.image && !b.image) return -1;
                if (!a.image && b.image) return 1;
                return 0;
              })
              .map((member, memberIndex) => (
                <div
                  key={member.name}
                  className="p-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: memberIndex * 0.1,
                      duration: 0.5,
                    }}
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden border-zinc-200 bg-white transition-all hover:shadow-lg">
                      <CardContent className="p-0">
                        <div className="relative aspect-square overflow-hidden">
                          {member.lead && (
                            <Badge className="z-10 rounded-full absolute right-2 top-2 bg-tbre-blue hover:bg-tbre-blue/90">
                              Lead
                            </Badge>
                          )}
                          {member.important && (
                            <Badge className="z-10 rounded-full absolute right-2 top-2 bg-tbre-yellow hover:bg-tbre-yellow/90">
                              Important
                            </Badge>
                          )}
                          <Image
                            src={member.image ?? "/team/placeholder.png"}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <div className="space-y-1.5 p-4">
                          <h3 className="font-semibold leading-none text-zinc-900">
                            {member.link ? (
                              <a
                                href={member.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-tbre-yellow transition-all underline decoration-tbre-yellow"
                              >
                                {member.name}
                              </a>
                            ) : (
                              member.name
                            )}
                          </h3>
                          {member.role && (
                            <p className="text-sm text-zinc-600">
                              {member.role}
                            </p>
                          )}
                          {member.link && (
                            <Link
                              href={member.link}
                              className="mt-2 inline-flex items-center gap-1 text-sm text-tbre-blue hover:text-tbre-blue/90"
                            >
                              Learn more{" "}
                              <ChevronRightIcon className="h-3 w-3" />
                            </Link>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}
