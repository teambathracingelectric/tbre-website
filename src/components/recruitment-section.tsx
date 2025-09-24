import { ShowMoreText } from "@/components/show-more-text";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recruitment } from "@/data/recruitment";

const FORM_LINK =
  "https://forms.office.com/Pages/ResponsePage.aspx?id=Ij1-N6FOLUKwrY_MiUBrnuaHFEKzAxRImIds5xrI0glUOEhZSVQ4OUhQUFJYMFdESVgyQzY2TDNWSC4u";

export function RecruitmentSection() {
  return (
    <section className="container px-4 py-16 mx-auto">
      {recruitment.map((team) => (
        <div
          key={team.name}
          className="mb-12"
          id={team.name.toLowerCase().replace(/\s+/g, "-")}
          style={{ scrollMarginTop: "144px" }}
        >
          <div className="mb-12">
            <h2 className="text-center text-2xl font-bold text-zinc-900">
              {team.name} Team Roles
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600">
              {team.description}
            </p>
            {team.additionalText && (
              <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600 whitespace-pre-line">
                {team.additionalText}
              </p>
            )}
            <div className="flex flex-col items-center mt-2 mb-2">
              <span className="text-sm text-zinc-500">
                <strong>Contact:</strong> {team.contact} &nbsp;|&nbsp;{" "}
                <strong>Members:</strong> {team.members}
              </span>
            </div>
            <div className="flex justify-center mt-6">
              <Button
                asChild
                size="lg"
                className="bg-tbre-yellow hover:bg-tbre-yellow/90 text-white"
              >
                <a target="_blank" rel="noopener noreferrer" href={FORM_LINK}>
                  Apply to Join
                </a>
              </Button>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.roles.map((role) => (
              <Card key={role.title} className="hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle className="mb-2 text-xl">{role.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ShowMoreText text={role.description} maxLength={550} />
                  {(role.degree || role.year || role.count) && (
                    <ul className="mb-2 text-gray-600">
                      {role.degree && (
                        <li>
                          <strong>Preferred Degree:</strong> {role.degree}
                        </li>
                      )}
                      {role.year && (
                        <li>
                          <strong>Preferred Year:</strong> {role.year}
                        </li>
                      )}
                      {role.count && (
                        <li>
                          <strong>Number of roles:</strong> {role.count}
                        </li>
                      )}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
